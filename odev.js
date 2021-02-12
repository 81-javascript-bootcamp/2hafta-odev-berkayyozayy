/** 

1. mycarDetails fonksiyonunu "GA12345 Toyota" ciktisini verecek sekilde duzenleyin.

**/

/* 
This erişimini bind, apply, call ve arrow kullanarak sağlayabiliriz.
Bind için apply ve call dan farklı bir durum söz konusudur.
Apply ve call direkt çağırma yapar. Bind ettiğimizde atama yapıp daha sonra kullanmalıyız.
*/

// Bind
var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota",

    displayDetails: function(){
        console.log(`${this.registrationNumber} ${this.brand}`);
    }
}

var myCarDetails =  car.displayDetails.bind(car);
myCarDetails();

// Apply
var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota",

    displayDetails: function(){
        console.log(`${this.registrationNumber} ${this.brand}`);
    }
}

car.displayDetails.apply(car);

// Call
var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota",

    displayDetails: function(){
        console.log(`${this.registrationNumber} ${this.brand}`);
    }
}

car.displayDetails.call(car);

// Arrow 
var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota",

    displayDetails: function(){
        console.log(this.registrationNumber + " " + this.brand);
    }
}

var myCarDetails = () => car.displayDetails();
myCarDetails();

/** 

2.name parametresi alan bir isValidName fonksiyonu yazin. Fonksiyon asagidaki kosullarin hepsi saglaniyorsa true, saglanmiyorsa false donmelidir:

name string olmali
name bos olmamali
bosluk icerebilir, ancak bosluk haridcindeki isimler en az 2 karakterden olusmali.

**/

function isValidName(name) {

  if (!name) { 
    return false
  }

  let hasWhiteSpace = name.match(/\w+/g)
  if (hasWhiteSpace == null) { 
    return false
  }

  let chCount = hasWhiteSpace.join().length;
  if (typeof name == 'string' && chCount > 1) {
    return true
  }
  return false
}

/**

3. summary fonkisyonunu ciktisi "Brave New World was written by Aldous Huxley. It is a dystopian novel written in 1932." olacak sekilde cagirin.

**/

const book = {
  title: 'Brave New World',
  author: 'Aldous Huxley',
}

function summary(genre, year) {
  console.log(
    `${this.title} was written by ${this.author}. It is a ${genre} novel written in ${year}.`,
  )
}
// Bind
let bindSummaryFunc = summary.bind(book, 'dystopian', '1932')
bindSummaryFunc()

// Call
summary.call(book, 'dystopian', '1932')

// Apply
summary.apply(book, ['dystopian', '1932'])

module.exports = isValidName




