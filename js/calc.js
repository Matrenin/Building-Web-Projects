import { printError, printResult } from './printResult.js';
import getDateDiff from './getDateDiff.js';

const from = document.querySelector("#datecalc");

from.onsubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const firstDate = formData.get("firstDate");
    const secondDate = formData.get("secondDate");
    if (!firstDate || !secondDate) {
        printError("Oooppppss -> put date");
    } else {
        const dateDiff = getDateDiff(firstDate, secondDate);
        printResult(dateDiff);
    }
};