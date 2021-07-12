document.addEventListener("DOMContentLoaded", function (event) {
    let newsUrl = 'php/NewsService.php';
    let loader = document.body.querySelector('.newsDiv img.loader');
    let newsDiv = document.body.querySelector('.containerNews');

    // News section service
    $.ajax({
        method: "GET",
        url: newsUrl,
        beforeSend: function (xhr) {
            loader.style.display = 'block';
        },
        success: function (result) {
            if (result !== '') {
                newsBox(JSON.parse(result));
                loader.style.display = 'none';
            }
        },
        error: function (error) {
            console.log("error", error);
            loader.style.display = 'none';
            let alert = '<div class="alert alert-danger text-center"  role="alert">خطادردریافت اطلاعات</div>';
            newsDiv.innerHTML = alert;
        }
    });

    // Generate news box
    function newsBox(content) {
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