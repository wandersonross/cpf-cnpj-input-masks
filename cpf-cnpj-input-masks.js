$('#ClienteCPF').keypress(function () {
  $(this).mask('000.000.000-00')
})

$('#ClienteCNPJ').keypress(function () {
  $(this).mask('00.000.000/0000-00')
})
