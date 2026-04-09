const dataArray = [
  {
    id: "me",
    nume: "Plamadeala",
    prenume: "Daniel",
    cnp: "2003500177986",
    seria: "AB",
    numar: "499",
    email: "daniel_plamadeala@yahoo.com",
    telefon: "0799296716"
  },
  {
    id: "sagnik",
    nume: "Bakshi",
    prenume: "Sagnik",
    cnp: "2003500199992",
    seria: "AB",
    numar: "299",
    email: "daniel.plamadeala@ulbsibiu.ro",
    telefon: "0799987654"
  },
  {
    id: "malii",
    nume: "Hutsan",
    prenume: "Andrei",
    cnp: "2004500177987",
    seria: "AB",
    numar: "199",
    email: "andreyka.gutsan@gmail.com",
    telefon: "0799296711"
  },
  {
    id: "mario",
    nume: "Predoi",
    prenume: "Mario",
    cnp: "2003500177775",
    seria: "AB",
    numar: "399",
    email: "danielplama@gmail.com",
    telefon: "0799123456"
  },
]


chrome.runtime.onMessage.addListener((message) => {
  let person: "me" | "sagnik" | "mario" | "malii" | undefined;
  switch (message.action) {
    case "myFields":
      person = "me";
      break;
    case "sagnikFields":
      person = "sagnik";
      break;
    case "maliiFields":
      person = "malii";
      break;
    case "marioFields":
      person = "mario";
      break;
  }
  if (person) {
    fillData(person);
  }
});


function fillData(person: "me" | "sagnik" | "mario" | "malii") {
  const numeInput = document.getElementsByName("Nume")[0] as HTMLInputElement;
  const prenumeInput = document.getElementsByName("Prenume")[0] as HTMLInputElement;
  const cnpInput = document.getElementsByName("CNP")[0] as HTMLInputElement;
  const seriaInput = document.getElementsByName("Seria")[0] as HTMLInputElement;
  const numarInput = document.getElementsByName("NrB")[0] as HTMLInputElement;
  const emailInput = document.getElementsByName("Email")[0] as HTMLInputElement;
  const confirmEmailInput = document.getElementsByName("ConfirmareEmail")[0] as HTMLInputElement;
  const telefonInput = document.getElementsByName("Telefon")[0] as HTMLInputElement;

  const data = dataArray.find(p => p.id === person);
  numeInput.value = data!.nume;
  prenumeInput.value = data!.prenume;
  cnpInput.value = data!.cnp;
  seriaInput.value = data!.seria;
  numarInput.value = data!.numar;
  emailInput.value = data!.email;
  confirmEmailInput.value = data!.email;
  telefonInput.value = data!.telefon;
}