const haveEnough = (amountMoney, amountApple, amountLoaf, costApple, costLoaf ) => {
    let spending = amountApple * costAppleapple + amountLoaf * costLoaf;

    if((mountMoney - spending) > 0){
        return 'Вам хватает денег на покупки';
    } else {
        return 'Вам не хватает денег';
    }
}
