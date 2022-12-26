if (document.getElementsByClassName("page-item active")[0].outerText == 1) {
  if (localStorage.getItem("data")) {
    localStorage.removeItem("data");
  }
  let tableHeader = document
    .getElementsByClassName("table")[0]
    .querySelectorAll("thead > tr > th");
  let dataKey = [];
  tableHeader.forEach((key) =>
    key.innerText === "" ? dataKey.push("ID") : dataKey.push(key.innerText)
  );
  let tableBody = document
    .getElementsByClassName("table")[0]
    .querySelectorAll("tbody > tr");

  let data = [];
  data.push(dataKey.join(","));
  tableBody.forEach((tbody) => {
    let dataValue = [];
    tbody.querySelectorAll("td").forEach((value) => {
      dataValue.push(value.innerText);
    });
    data.push(dataValue.join(","));
  });
  let nextPage = null;
  for (let a of document.querySelectorAll("a")) {
    a.getAttribute("rel") == "next" && (nextPage = a.getAttribute("href"));
  }
  if (nextPage !== null) {
    localStorage.setItem("data", JSON.stringify(data));
    window.open(nextPage, "_self");
  } else {
    const download = (csv) => {
      const blob = new Blob([csv], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.setAttribute("href", url);
      a.setAttribute("target", "_blank");
      a.click();
    };
    download(data.join("\n"));
  }
} else {
  alert("Wrong page!");
}
