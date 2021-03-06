var date_range_picker = function date_range_picker() {
    $('.date-range-picker').each(function () {
        $(this).daterangepicker({
            timePicker: true,
            timePickerIncrement: 30,
            alwaysShowCalendars: true
        }, function (start, end) {
            $('.start_hidden').val(start.format('YYYY-MM-DD HH:mm'));
            $('.end_hidden').val(end.format('YYYY-MM-DD HH:mm'));
        });
    });
};

$(document).ready(date_range_picker);