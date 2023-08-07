// Algoritmo de convercion de temperatura.

function celsiusFahrenheit ( celsius ) {
    return ( celsius * 9 / 5 ) + 32;
}

function fahrenheitCelsius ( fahrenheit ) {
    return ( fahrenheit - 32 ) * 5 / 9;
}

function convertidorDeTemperatura() {
    while (true) {
        const opciones = prompt( "Elija una opcion: \n1. Celsius a Fahenheit \n2. Fahenheit a Celsius \n3. Salir" )

        if ( opciones === "1" ) {

            const celsius = parseFloat( prompt ( "Igresa la temperatura en Celsius" ));
            const fahrenheit = celsiusFahrenheit( celsius );
            alert ( `${celsius} °C son ${fahrenheit.toFixed(2)} °F` );

        } else if ( opciones === "2" ) {

            const fahrenheit = parseFloat ( prompt ( "Igresa la temperatura en fahrenheit" ));
            const celsius = fahrenheitCelsius(fahrenheit);
            alert(`${fahrenheit}°F son ${celsius.toFixed(2)}°C`);

        } else if ( opciones === "3" ) {

            alert ( "Gracias por usar nuestro algoritmo. A dios !" );
            break;

        } else {

            alert ( "Opcion incorrecta. Por favor introdusca una opcion valida." );

        }
    }
}

alert( "Bienvenido a su convetidor de temperatura." );

convertidorDeTemperatura();