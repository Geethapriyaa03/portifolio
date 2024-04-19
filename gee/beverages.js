$(document).ready(function() {
    let drinkCounts = {
        tea: 0,
        coffee: 0,
        lemontea: 0,
        coldcoffee: 0,
        badammilk: 0
    };

    const rates = {
        tea: 10,
        coffee: 15,
        lemontea: 30,
        coldcoffee: 30,
        badammilk: 20
    };

    $('input[name="drink"]').change(function() {
        const selectedDrink = $('input[name="drink"]:checked').val();
        if (selectedDrink && drinkCounts[selectedDrink] !== undefined) {
            drinkCounts[selectedDrink]++;
            $('#' + selectedDrink + 'Count').text(drinkCounts[selectedDrink]);
        }
    });

    $('#calculateBtn').click(function() {
        let total = 0;
        $('input[name="drink"]').each(function() {
            const selectedDrink = $(this).val();
            if (drinkCounts[selectedDrink] > 0 && rates[selectedDrink] !== undefined) {
                total += drinkCounts[selectedDrink] * rates[selectedDrink];
            }
        });
        $('#bill').text(total.toFixed(2));
    });
});
