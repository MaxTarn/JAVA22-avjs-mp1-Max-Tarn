console.log("connected")

const img = document.createElement('img')

const img1Url= new URL('../media/artworks-000810672895-5vv94q-t500x500.jpg', import.meta.url)
const img2Url = new URL('../media/doggo2.jpg', import.meta.url)

console.log(import.meta)

img.src = img2Url

document.body.append(img)