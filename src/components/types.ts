
interface Transaction {
    recepientAccount: string,
    amount: string,
    type: string
    timestamp: string
    accountType: string

}

interface UserDetails {
    username: string;
    fullname: string;
}

interface AccountDetails {
    accountNumber: string;
    accountType: string;
    balance: string;
    dateJoined: string;
}

interface Dashboard {
    user: UserDetails;
    account: AccountDetails[];
}