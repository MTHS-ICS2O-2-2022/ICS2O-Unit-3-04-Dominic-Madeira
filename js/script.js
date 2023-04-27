// Copyright (c) 2023 Dominic M. All rights reserved
//
// Created by: Dominic M.
// Created on: April 2023
'use strict'
/**
 * This function converst fahrenheit to celsius
 */
function myButtonClicked () {
  // input
  const fahrenheit = parseFloat(document.getElementById('temperature').value)

  // process
  const celsius = (fahrenheit - 32) * 5 / 9

  // output
  document.getElementById('celsius').innerHTML = 'The temperature is: ' + celsius.toFixed(2) + ' °C'
}
