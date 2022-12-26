if (document.getElementsByClassName("page-item active")[0].outerText != 1) {
  if (localStorage.getItem("data")) {
    let tableBody = document
      .getElementsByClassName("table")[0]
      .querySelectorAll("tbody > tr");
    let data = JSON.parse(localStorage.getItem("data"));
    tableBody.forEach((tbody) => {
      let dataValue = [];
      tbody.querySelectorAll("td").forEach((value) => {
        dataValue.push(value.innerText);
      });
      data.push(dataValue.join(", "));
    });
    localStorage.setItem("data", JSON.stringify(data));
    let nextPage = null;
    for (let a of document.querySelectorAll("a")) {
      a.getAttribute("rel") == "next" && (nextPage = a.getAttribute("href"));
    }
    if (nextPage !== null) {
      window.open(nextPage, "_self");
    }
  }
}
