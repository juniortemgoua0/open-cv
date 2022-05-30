$(document).ready(function () {
  $('#btn_download').click((e) => {
    console.log('demand of download')
    e.preventDefault()
    window.setTimeout(()=>{
      DownloadPdf()
    } , 1000)
  })

  function DownloadPdf() {
    kendo.drawing
      .drawDOM("#container_cv")
      .then(function (group) {
        //Rend le resultat sur forme de pdf
        return kendo.drawing.exportPDF(group, {
          paperSize: "auto",
          margin: {left: "1cm", top: "1cm", right: "1cm", bottom: "1cm"}
        });
      }).done(function (dataURI) {
      // Save the PDF file
      kendo.saveAs({
        dataURI,
        fileName: "myCv.pdf",
        proxyURL: "https://demos.telerik.com/kendo-ui/service/export"
      });
    });
  }
});
