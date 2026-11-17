import sys, gi, cairo, io
gi.require_version('Rsvg','2.0'); from gi.repository import Rsvg
from PIL import Image
def render(svg, w, h=None, bg=None):
    hd=Rsvg.Handle.new_from_file(svg); ok,iw,ih=hd.get_intrinsic_size_in_pixels()
    h=h or round(w*ih/iw); s=cairo.ImageSurface(cairo.FORMAT_ARGB32,w,h); c=cairo.Context(s)
    if bg: hx=bg.lstrip('#'); c.set_source_rgb(*[int(hx[i:i+2],16)/255 for i in (0,2,4)]); c.paint()
    r=Rsvg.Rectangle(); r.x,r.y,r.width,r.height=0,0,w,h; hd.render_document(c,r)
    buf=io.BytesIO(); s.write_to_png(buf); buf.seek(0); return Image.open(buf).convert('RGBA')
K=sys.argv[1]
import os
os.makedirs(f"{K}/png",exist_ok=True)
for th in ("light","dark","mono-black","mono-white"):
    for sz in (512,1024): render(f"{K}/symbol/kamui-symbol-{th}.svg",sz).save(f"{K}/png/kamui-symbol-{th}-{sz}.png")
    render(f"{K}/lockup/kamui-horizontal-{th}.svg",1200).save(f"{K}/png/kamui-horizontal-{th}-1200.png")
for a in ("ultra","dark","light"):
    render(f"{K}/avatar/kamui-avatar-{a}.svg",1024).save(f"{K}/avatar/kamui-avatar-{a}-1024.png")
for b in ("light","dark"):
    render(f"{K}/banner/kamui-banner-{b}.svg",1600).save(f"{K}/png/kamui-banner-{b}-1600.png")
# web icons: 16 from the pixel-grid cut, larger from the master
small=f"{K}/symbol/kamui-symbol-small-light.svg"; master=f"{K}/symbol/kamui-symbol-light.svg"
i16=render(small,16); i32=render(master,32); i48=render(master,48)
i16.save(f"{K}/web/favicon-16.png"); i32.save(f"{K}/web/favicon-32.png")
i48.save(f"{K}/web/favicon.ico",format="ICO",sizes=[(16,16),(32,32),(48,48)],append_images=[i16,i32])
for sz,name in ((180,"apple-touch-icon.png"),(192,"icon-192.png"),(512,"icon-512.png")):
    render(f"{K}/avatar/kamui-avatar-ultra.svg",sz).save(f"{K}/web/{name}")
print("ok")
