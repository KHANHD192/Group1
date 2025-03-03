import  service from "../service/renderPDF.js"
const getPdfPage = async(req,res) =>{
    const url = req.get("Referer")
   try {
    const pdfBuffer  = await service.renderPDF(url)
    res.status(200)
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline',
    })
    res.send(pdfBuffer);
   } catch (error) {
    res.status(500)
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify({
      error: {
        message: error.message
    }
    }))
    
    return;
   }
}
export default {getPdfPage}