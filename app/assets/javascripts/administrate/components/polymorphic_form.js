$(function() {
  var select = $('.polymorphic-select');

  if (select.length) {
    var selectedType, selectedId;

    var form = select.parents('form:first');
    var selectName = select.attr('name');

    var hiddenType = $('<input>').attr('type', 'hidden')
      .attr('name', selectName.replace(/\[(\w+)\]/, '[$1_type]'));

    var hiddenId = $('<input>').attr('type', 'hidden')
      .attr('name', selectName.replace(/\[(\w+)\]/, '[$1_id]'));

    form.on('submit', function(e) {
      e.preventDefault();
      var selectedValue = select.val();

      if (selectedValue.length) {
        var value = selectedValue.split('#');

        hiddenType.attr('value', value[0]);
        hiddenId.attr('value', value[1]);
      }

      select.after(hiddenType).after(hiddenId);
      select.prop('disabled', true);
      this.submit();
    });
  }
});
