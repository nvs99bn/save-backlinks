if (localStorage.getItem("data")) {
  const download = (csv) => {
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("href", url);
    a.setAttribute("target", "_blank");
    a.click();
  };
  let data = JSON.parse(localStorage.getItem("data"));
  download(data.join("\n"));
} else {
  alert("No data found!!!");
}
