
export  function getExpireDate(dateString: string): string {
    const originalDate = new Date(dateString);
    const expirationDate = new Date(originalDate);
    expirationDate.setFullYear(expirationDate.getFullYear() + 5);
    const formattedExpirationDate = `${expirationDate.getMonth() + 1}/${expirationDate.getDate()}/${expirationDate.getFullYear()}`;
    return formattedExpirationDate; // Output: 1/29

}

export function splitAccountNo(accountNumber: string): string {

    const accountString = accountNumber
    const chunks = accountString.match(/.{1,3}/g)!;
    const formattedAccountNumber = chunks.join("    ");
    return formattedAccountNumber;
}




export function formatMoneyString(moneyString: string) {
    const numberValue = parseFloat(moneyString);

    if (isNaN(numberValue)) {
        return "Invalid input";
    }

    const formattedMoney = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'KES',
        minimumFractionDigits: 2,
    }).format(numberValue);

    return formattedMoney;
}