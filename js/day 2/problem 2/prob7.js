function vowel(N, str) {
       let flag;
    for (let i = 0; i < N; i++) {
        let vowels = str[i];
        if (vowels == "a" || vowels == "e" || vowels == "i" || vowels == "o" || vowels == "u") {
            flag=true
            break;
        }
    }
    if (flag==true) {
        console.log(true);
    }else{
        console.log(false);
    }

}

vowel(6, "duadhv")