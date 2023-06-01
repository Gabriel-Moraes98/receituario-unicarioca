function receitaGerada() {
  document.getElementById("nome").innerHTML =
    document.getElementById("paciente").value;
  document.getElementById("impressao-convenio").innerHTML =
    document.getElementById("select").value;
  document.getElementById("impressao-doutor").innerHTML =
    document.getElementById("medico").value;
  document.getElementById("impressao-crm").innerHTML =
    document.getElementById("crm").value;
  document.getElementById("impressao-medico").innerHTML =
    document.getElementById("medico").value;
  document.getElementById("impressao-cpf").innerHTML =
    document.getElementById("cpf").value;
  document.getElementById("prescricao-impressao").innerHTML =
    document.getElementById("prescricao").value;
  document.getElementById("impressao-dataAtual").innerHTML = dataAtual();
}
function dataAtual() {
  let data = new Date();
  return (
    data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear()
  );
}
$(document).ready(function () {
  $("form").on("submit", function (event) {
    receitaGerada();
    window.print();
    $("form").trigger("reset");
  });
  $(document).ready(function () {
    $("form").submit(function () {
      alert("Receituário salvo com sucesso");
    });
  });
});
