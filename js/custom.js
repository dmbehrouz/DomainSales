document.addEventListener("DOMContentLoaded", function (event) {
    let newsUrl = 'php/NewsService.php';
    $.ajax({
        method: "GET",
        url: newsUrl,
        beforeSend: function (xhr) {
            let loader = document.body.querySelector('.newsDiv img.loader');
            loader.style.display = 'block';
        },
        success: function (result) {
            if (result !== '') {
                newsBox(JSON.parse(result));
                let loader = document.body.querySelector('.newsDiv img.loader');
                loader.style.display = 'none';
            }
        },
        error: function (error) {
            console.log("error", error);
        }
    });

    function newsBox(content) {
        let newsDiv = document.body.querySelector('.containerNews');
        let contentHtml = '';
        content.forEach(news => {
            let newsRow = `<div class="row" style="margin-top: 7px">
                                <div class="col-12">
                                    <div class="card">
                                      <div class="card-header" style="font-size: 12px;font-weight: 700">
                                        ${news.alternativeTitle}
                                      </div>
                                      <div class="card-body" style="padding: 20px 20px 0">
                                        <p class="card-text" style="font-size: 10px">${news.title}</p>
                                        <footer class="card-footer bg-transparent border-dark text-left" style="font-size: 10px;margin-bottom: 0">${news.visitCount} <i class="fas fa-eye"></i></footer>
                                      </div>
                                    </div>
                                </div>
                               </div>`;
            contentHtml += newsRow;
        });
        newsDiv.innerHTML = contentHtml;
    }

});