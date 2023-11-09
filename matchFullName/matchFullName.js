function match(text){
    let regexp = /\b[A-Z][a-z]+[ ][A-Z][a-z]+\b/g

    let matches = text.match(regexp)
    console.log(matches.join(" "))
}
match("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")