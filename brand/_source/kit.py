"""KamUI brand kit generator — symbol A2 ("Primitivos", compacta)."""
import math, os, sys, json
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen

OUT = sys.argv[1]
INTER = "/usr/share/fonts/truetype/inter-zorin-os/Inter-{}.ttf"
MONO = "/usr/share/fonts/truetype/jetbrains-mono-zorin-os/JetBrainsMono-Medium.ttf"

# ---------------------------------------------------------------- palette
C = dict(
    ultra="#2f27ce", ultra_dark="#8b85ff",          # structure (primary)
    atom="#0891b2", atom_dark="#22d3ee", atom_tile="#a5f3fc",  # the atom (dot)
    ink="#040316", paper="#fbfbfe", night="#010104", night_text="#eae9fc",
    sub="#5c5a7a", sub_dark="#a3a1c4", white="#ffffff",
)
THEMES = {
    "light": dict(ink=C["ultra"], dot=C["atom"], text=C["ink"], sub=C["sub"], bg=C["paper"]),
    "dark": dict(ink=C["ultra_dark"], dot=C["atom_dark"], text=C["night_text"], sub=C["sub_dark"], bg=C["night"]),
    "mono-black": dict(ink="#000000", dot="#000000", text="#000000", sub="#000000", bg=None),
    "mono-white": dict(ink="#ffffff", dot="#ffffff", text="#ffffff", sub="#ffffff", bg=None),
}

f = lambda v: (f"{v:.2f}").rstrip("0").rstrip(".")


def cap(p, q, r):
    (x1, y1), (x2, y2) = p, q
    dx, dy = x2 - x1, y2 - y1
    L = math.hypot(dx, dy)
    nx, ny = -dy / L * r, dx / L * r
    return (f"M{f(x1+nx)} {f(y1+ny)}L{f(x2+nx)} {f(y2+ny)}A{f(r)} {f(r)} 0 0 0 {f(x2-nx)} {f(y2-ny)}"
            f"L{f(x1-nx)} {f(y1-ny)}A{f(r)} {f(r)} 0 0 0 {f(x1+nx)} {f(y1+ny)}Z")


def circ(c, r):
    x, y = c
    return f"M{f(x-r)} {f(y)}a{f(r)} {f(r)} 0 1 0 {f(2*r)} 0a{f(r)} {f(r)} 0 1 0 {f(-2*r)} 0Z"


def symbol_geometry(scale=1.0, ox=0.0, oy=0.0, small=False):
    """Returns (ink_path, dot_path, bbox). Master drawn on a 256 grid; A2 proportions."""
    if small:  # 16 px cut, pixel-aligned stem, wider gaps
        S = dict(stem=((3.5, 3.5), (3.5, 12.5), 1.5), arm=((8.3, 7.7), (12.4, 3.6), 1.6), dot=((12.3, 12.3), 1.9))
    else:
        r = 28; sx = 60; ex = sx + r + 14 + r      # gap 14 between stem and arm
        S = dict(stem=((sx, 72), (sx, 184), r), arm=((ex, 256 - ex), (184, 72), r), dot=((183, 183), 30))
    (sp, sq, sr), (ap, aq, ar), (dc, dr) = S["stem"], S["arm"], S["dot"]
    xs = [sp[0] - sr, sq[0] + sr, ap[0] - ar, aq[0] + ar, dc[0] - dr, dc[0] + dr]
    ys = [sp[1] - sr, sq[1] + sr, aq[1] - ar, dc[1] + dr]
    x0, x1, y0, y1 = min(xs), max(xs), min(ys), max(ys)
    if small:  # keep absolute, pixel-aligned coordinates
        x0 = y0 = 0; ox = oy = 0
    T = lambda p: (ox + (p[0] - x0) * scale, oy + (p[1] - y0) * scale)
    ink = cap(T(sp), T(sq), sr * scale) + cap(T(ap), T(aq), ar * scale)
    dot = circ(T(dc), dr * scale)
    return ink, dot, (x1 - x0) * scale, (y1 - y0) * scale


# master bbox (unscaled)
_, _, MW, MH = symbol_geometry()


def text_path(text, font_file, size, x, y_base, tracking=0.0, kern=None):
    """Glyph outlines as one SVG path; y_base = baseline. Returns (d, width)."""
    font = TTFont(font_file)
    gs = font.getGlyphSet(); cmap = font.getBestCmap(); upm = font["head"].unitsPerEm
    s = size / upm
    pen = SVGPathPen(gs)
    cx = 0.0
    for i, ch in enumerate(text):
        g = cmap[ord(ch)]
        tp = TransformPen(pen, (s, 0, 0, -s, x + cx, y_base))
        gs[g].draw(tp)
        cx += gs[g].width * s + tracking * size
        if kern and i + 1 < len(text):
            cx += kern.get(text[i:i+2], 0) * size
    return pen.getCommands(), cx - tracking * size


def cap_height(font_file):
    t = TTFont(font_file); return t["OS/2"].sCapHeight / t["head"].unitsPerEm


WORD_KERN = {"Ka": -0.015, "UI": 0.01}
INTER_BOLD = INTER.format("Bold")
CAPH = cap_height(INTER_BOLD)


def svg_doc(w, h, body, title, desc="", extra_attr=""):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {f(w)} {f(h)}" width="{f(w)}" height="{f(h)}" '
            f'role="img" aria-labelledby="t"{extra_attr}><title id="t">{title}</title>{desc}{body}</svg>\n')


def write(rel, content):
    p = os.path.join(OUT, rel); os.makedirs(os.path.dirname(p), exist_ok=True)
    open(p, "w").write(content); return p


def bg_rect(w, h, col, rx=0):
    return f'<rect width="{f(w)}" height="{f(h)}" rx="{f(rx)}" fill="{col}"/>' if col else ""


# ---------------------------------------------------------------- symbol
def symbol_svg(theme, pad=0.0, bg=False, size=256, small=False, rx=0):
    t = THEMES[theme]
    if small:
        ink, dot, w, h = symbol_geometry(small=True)
        ink, dot, w, h = symbol_geometry(small=True, ox=(16 - w) / 2, oy=(16 - h) / 2)
        body = bg_rect(16, 16, t["bg"] if bg else None, rx) + f'<path fill="{t["ink"]}" d="{ink}"/><path fill="{t["dot"]}" d="{dot}"/>'
        return svg_doc(16, 16, body, "KamUI")
    inner = size * (1 - 2 * pad)
    sc = inner / max(MW, MH)
    ink, dot, w, h = symbol_geometry(sc)
    ink, dot, w, h = symbol_geometry(sc, ox=(size - w) / 2, oy=(size - h) / 2 - size * 0.0)
    body = bg_rect(size, size, t["bg"] if bg else None, rx) + f'<path fill="{t["ink"]}" d="{ink}"/><path fill="{t["dot"]}" d="{dot}"/>'
    return svg_doc(size, size, body, "KamUI")


def symbol_current_color():
    sc = 256 * 0.86 / max(MW, MH)
    ink, dot, w, h = symbol_geometry(sc)
    ink, dot, w, h = symbol_geometry(sc, ox=(256 - w) / 2, oy=(256 - h) / 2)
    # ink follows currentColor; dot can be themed with --kamui-logo-accent, falls back to currentColor
    body = (f'<path fill="currentColor" d="{ink}"/>'
            f'<path style="fill:var(--kamui-logo-accent,currentColor)" d="{dot}"/>')
    return svg_doc(256, 256, body, "KamUI")


# ---------------------------------------------------------------- lockups
def lockup(theme, layout="horizontal", sub=False):
    t = THEMES[theme]
    fs = 100                      # wordmark font size
    ch = CAPH * fs                # cap height
    mark_h = ch * 1.32            # symbol height vs cap height
    sc = mark_h / MH
    mark_w = MW * sc
    gap = 28 * sc * 1.35          # ≈ stroke-related spacing
    clear = 30 * sc * 2           # clear space = dot diameter
    word_d, word_w = text_path("KamUI", INTER_BOLD, fs, 0, 0, tracking=-0.02, kern=WORD_KERN)
    if layout == "horizontal":
        W = clear + mark_w + gap + word_w + clear
        H = clear + mark_h + clear
        mx, my = clear, clear
        base = my + mark_h / 2 + ch / 2 - ch * 0.04   # cap-centred, optically nudged up a hair
        wx = mx + mark_w + gap
        if sub:
            sd, sw = text_path("@jotnar_dev/core", MONO, fs * 0.30, 0, 0)
            W = max(W, wx + sw + clear)
    else:  # stacked
        H = clear + mark_h * 1.9 + ch * 0.55 + ch + clear
        W = clear * 2 + max(word_w, mark_w * 1.9)
        big = 1.9; sc2 = sc * big
        mx, my = (W - mark_w * big) / 2, clear
        base = my + mark_h * big + ch * 0.55 + ch
        wx = (W - word_w) / 2
    if layout == "horizontal":
        ink, dot, *_ = symbol_geometry(sc, mx, my)
    else:
        ink, dot, *_ = symbol_geometry(sc2, mx, my)
    word_d, _ = text_path("KamUI", INTER_BOLD, fs, wx, base, tracking=-0.02, kern=WORD_KERN)
    body = (bg_rect(W, H, t["bg"]) if False else "") + \
        f'<path fill="{t["ink"]}" d="{ink}"/><path fill="{t["dot"]}" d="{dot}"/><path fill="{t["text"]}" d="{word_d}"/>'
    if layout == "horizontal" and sub:
        sd, _ = text_path("@jotnar_dev/core", MONO, fs * 0.30, wx + 4, base + ch * 0.62)
        body += f'<path fill="{t["sub"]}" d="{sd}"/>'
        H = max(H, base + ch * 0.62 + clear * 0.6)
    return svg_doc(W, H, body, "KamUI")


# ---------------------------------------------------------------- banner (README)
def _old_banner(theme):
    t = THEMES[theme]
    W, H = 800, 200
    fs = 56; ch = CAPH * fs
    mark_h = ch * 1.32; sc = mark_h / MH; mark_w = MW * sc; gap = 28 * sc * 1.35
    word_d, word_w = text_path("KamUI", INTER_BOLD, fs, 0, 0, tracking=-0.02, kern=WORD_KERN)
    tag = "Modern CSS Component Library for Tailwind CSS 4"
    tag_d, tag_w = text_path(tag, INTER.format("Regular"), 15, 0, 0)
    block_w = mark_w + gap + max(word_w, tag_w)
    x0 = (W - block_w) / 2
    block_h = ch + 18 + 15 * 0.73
    top = (H - block_h) / 2
    base = top + ch
    my = base - ch / 2 - mark_h / 2 - ch * 0.0 + 0
    my = top + block_h / 2 - mark_h / 2
    ink, dot, *_ = symbol_geometry(sc, x0, my)
    wx = x0 + mark_w + gap
    word_d, _ = text_path("KamUI", INTER_BOLD, fs, wx, base, tracking=-0.02, kern=WORD_KERN)
    tag_d, _ = text_path(tag, INTER.format("Regular"), 15, wx + 2, base + 18 + 15 * 0.73)
    # faint primitives pattern (line · diagonal · dot) at both edges — the system seed
    pat = []
    op = "0.10" if theme == "light" else "0.14"
    def prim(kind, cx, cy, s):
        r = 7 * s
        if kind == 0: return cap((cx, cy - 16 * s), (cx, cy + 16 * s), r)
        if kind == 1: return cap((cx - 11 * s, cy + 11 * s), (cx + 11 * s, cy - 11 * s), r)
        return circ((cx, cy), r * 1.07)
    k = 0
    for gx in range(6):
        for gy in range(4):
            for side in (0, 1):
                cx = 26 + gx * 40 if side == 0 else W - 26 - gx * 40
                cy = 25 + gy * 50
                if gx > 2 + (gy % 2): continue
                kind = (gx + gy * 2 + side) % 3
                pat.append((kind, prim(kind, cx, cy, 0.9)))
    pat_svg = "".join(f'<path fill="{t["dot"] if kd == 2 else t["ink"]}" fill-opacity="{op}" d="{d}"/>' for kd, d in pat)
    body = (bg_rect(W, H, t["bg"]) + pat_svg +
            f'<path fill="{t["ink"]}" d="{ink}"/><path fill="{t["dot"]}" d="{dot}"/>'
            f'<path fill="{t["text"]}" d="{word_d}"/><path fill="{t["sub"]}" d="{tag_d}"/>')
    return svg_doc(W, H, body, "KamUI — Modern CSS Component Library for Tailwind CSS 4")



def tagged_block(theme, fs, tag, tag_font, tag_size, lead, W=None, H=None, pad=None, bg=False, pattern=False):
    t = THEMES[theme]
    ch = CAPH * fs
    tag_ch = cap_height(tag_font) * tag_size
    tag_x_h = tag_ch  # baseline offset uses cap height of tag font
    block_h = ch + lead + tag_ch
    mark_h = block_h * 1.04; sc = mark_h / MH; mark_w = MW * sc
    gap = 28 * sc * 1.15
    _, word_w = text_path("KamUI", INTER_BOLD, fs, 0, 0, tracking=-0.02, kern=WORD_KERN)
    _, tag_w = text_path(tag, tag_font, tag_size, 0, 0)
    block_w = mark_w + gap + max(word_w, tag_w)
    if pad is None: pad = 30 * sc * 2
    if W is None: W = block_w + 2 * pad
    if H is None: H = mark_h + 2 * pad
    x0 = (W - block_w) / 2
    my = (H - mark_h) / 2
    top = my + (mark_h - block_h) / 2
    base = top + ch
    ink, dot, *_ = symbol_geometry(sc, x0, my)
    wx = x0 + mark_w + gap
    word_d, _ = text_path("KamUI", INTER_BOLD, fs, wx, base, tracking=-0.02, kern=WORD_KERN)
    tag_d, _ = text_path(tag, tag_font, tag_size, wx + fs * 0.03, base + lead + tag_ch)
    body = (bg_rect(W, H, t["bg"]) if bg else "") + (primitives_pattern(theme, W, H) if pattern else "") + \
        f'<path fill="{t["ink"]}" d="{ink}"/><path fill="{t["dot"]}" d="{dot}"/>' \
        f'<path fill="{t["text"]}" d="{word_d}"/><path fill="{t["sub"]}" d="{tag_d}"/>'
    return W, H, body


def primitives_pattern(theme, W, H):
    t = THEMES[theme]; op = "0.08" if theme == "light" else "0.12"
    def prim(kind, cx, cy, s):
        r = 7 * s
        if kind == 0: return cap((cx, cy - 16 * s), (cx, cy + 16 * s), r)
        if kind == 1: return cap((cx - 11 * s, cy + 11 * s), (cx + 11 * s, cy - 11 * s), r)
        return circ((cx, cy), r * 1.07)
    out = []
    for gx in range(4):
        for gy in range(4):
            for side in (0, 1):
                if gx > 1 + (gy % 2): continue
                cx = 26 + gx * 40 if side == 0 else W - 26 - gx * 40
                cy = 25 + gy * 50
                kind = (gx + gy * 2 + side) % 3
                col = t["dot"] if kind == 2 else t["ink"]
                out.append(f'<path fill="{col}" fill-opacity="{op}" d="{prim(kind, cx, cy, 0.9)}"/>')
    return "".join(out)


def banner(theme):
    W, H, body = tagged_block(theme, 56, "Modern CSS Component Library for Tailwind CSS 4", INTER.format("Regular"), 15, 20,
                              W=800, H=200, bg=True, pattern=True)
    return svg_doc(W, H, body, "KamUI — Modern CSS Component Library for Tailwind CSS 4")


def pkg_lockup(theme):
    W, H, body = tagged_block(theme, 100, "@jotnar_dev/core", MONO, 30, 30)
    return svg_doc(W, H, body, "KamUI — @jotnar_dev/core")

# ---------------------------------------------------------------- write everything
for th in THEMES:
    write(f"symbol/kamui-symbol-{th}.svg", symbol_svg(th, pad=0.07))
    write(f"symbol/kamui-symbol-small-{th}.svg", symbol_svg(th, small=True))
    write(f"lockup/kamui-horizontal-{th}.svg", lockup(th))
    write(f"lockup/kamui-stacked-{th}.svg", lockup(th, "stacked"))
write("symbol/kamui-symbol-currentcolor.svg", symbol_current_color())
write("lockup/kamui-horizontal-pkg-light.svg", pkg_lockup("light"))
write("lockup/kamui-horizontal-pkg-dark.svg", pkg_lockup("dark"))
# avatars (full-bleed square: GitHub/npm crop to circle or rounded square themselves)
write("avatar/kamui-avatar-dark.svg", symbol_svg("dark", pad=0.24, bg=True))
write("avatar/kamui-avatar-light.svg", symbol_svg("light", pad=0.24, bg=True))
THEMES["ultra"] = dict(ink=C["white"], dot=C["atom_dark"], text=C["white"], sub=C["white"], bg=C["ultra"])
write("avatar/kamui-avatar-ultra.svg", symbol_svg("ultra", pad=0.24, bg=True))
# favicon: small cut, with dark-tab adaptation inside the SVG
ink, dot, w, h = symbol_geometry(small=True)
ink, dot, w, h = symbol_geometry(small=True, ox=(16 - w) / 2, oy=(16 - h) / 2)
fav = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><title>KamUI</title>'
       f'<style>.i{{fill:{C["ultra"]}}}.d{{fill:{C["atom"]}}}'
       f'@media (prefers-color-scheme:dark){{.i{{fill:{C["ultra_dark"]}}}.d{{fill:{C["atom_dark"]}}}}}</style>'
       f'<path class="i" d="{ink}"/><path class="d" d="{dot}"/></svg>\n')
write("web/favicon.svg", fav)
write("banner/kamui-banner-light.svg", banner("light"))
write("banner/kamui-banner-dark.svg", banner("dark"))
print("ok")
