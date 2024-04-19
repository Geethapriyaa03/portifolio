$(document).ready(function() {
    let teaCount = 0;
    let coffeeCount = 0;
    let lemonteaCount = 0;
    let coldcoffeeCount = 0;
    let badammilkCount = 0;

    const tearate = 10;
    const coffeerate = 15;
    const lemontearate = 30;
    const coldcoffeerate = 30;
    const badammilkrate = 20;

    $('input[name="drink"]').change(function() {
        const selectedDrink = $('input[name="drink"]:checked').val();
        switch (selectedDrink) {
            case 'tea':
                teaCount++;
                $('#teaCount').text(teaCount);
                break;
            case 'coffee':
                coffeeCount++;
                $('#coffeeCount').text(coffeeCount);
                break;
            case 'lemontea':
                lemonteaCount++;
                $('#lemonteaCount').text(lemonteaCount);
                break;
            case 'coldcoffee':
                coldcoffeeCount++;
                $('#coldcoffeeCount').text(coldcoffeeCount);
                break;
            case 'badammilk':
                badammilkCount++;
                $('#badammilkCount').text(badammilkCount);
                break;
            default:
                break;
        }
    });

    $('#calculateBtn').click(function() {
        let total = 0;
        total += teaCount * tearate;
        total += coffeeCount * coffeerate;
        total += lemonteaCount * lemontearate;
        total += coldcoffeeCount * coldcoffeerate;
        total += badammilkCount * badammilkrate;

        $('#bill').text(total.toFixed(2));
    });
});
