const medicineDatabase = {
  fever: ["Paracetamol 500mg", "Crocin", "Ibuprofen"],
  cold: ["Cetirizine", "Sinarest", "Benadryl"],
  cough: ["Dextromethorphan", "Ascoril", "Coflin"],
  diabetes: ["Metformin", "Glipizide", "Insulin"],
  hypertension: ["Amlodipine", "Losartan", "Telmisartan"],
  headache: ["Aspirin", "Paracetamol", "Naproxen"],
  acidity: ["Pantoprazole", "Ranitidine", "Omeprazole"],
  infection: ["Amoxicillin", "Ciprofloxacin", "Azithromycin"],
  allergy: ["Loratadine", "Cetirizine", "Fexofenadine"],
  vomiting: ["Ondansetron", "Domperidone", "Emeset"],
  asthma: ["Salbutamol", "Montelukast", "Formoterol"],
  diarrhoea: ["ORS", "Loperamide", "Racecadotril"],
  anemia: ["Iron supplements", "Folic acid", "Vitamin B12"],
  malaria: ["Chloroquine", "Artemether", "Primaquine"],
  typhoid: ["Cefixime", "Azithromycin", "Ofloxacin"]
};

const hospitals = [
  { name: "City Care Hospital", address: "Main Road, Visakhapatnam" },
  { name: "Global Health Clinic", address: "Beach Road, Vizag" },
  { name: "Andhra Multi-Specialty", address: "Gajuwaka, Visakhapatnam" },
  { name: "Apollo Hospital", address: "Ramnagar, Vizag" },
  { name: "Seven Hills Hospital", address: "Waltair Main Rd, Vizag" },
  { name: "King George Hospital", address: "Maharani Peta, Visakhapatnam" },
  { name: "AIIMS Hospital", address: "Mangalagiri, Guntur" },
  { name: "CARE Hospitals", address: "Banjara Hills, Hyderabad" },
  { name: "Rainbow Children's Hospital", address: "Vikrampuri, Secunderabad" },
  { name: "KIMS Hospital", address: "Kondapur, Hyderabad" },
  { name: "Narayana Health City", address: "Hosur Road, Bangalore" },
  { name: "Manipal Hospital", address: "Old Airport Road, Bangalore" },
  { name: "Fortis Hospital", address: "Mulund West, Mumbai" },
  { name: "Jaslok Hospital", address: "Pedder Road, Mumbai" },
  { name: "Medanta The Medicity", address: "Sector 38, Gurugram" }
];

let currentHospital = null;

function generatePrescription() {
  const diseaseInput = document.getElementById("diseaseInput").value.toLowerCase();
  const medicineList = document.getElementById("medicineList");
  const hospitalName = document.getElementById("hospitalName");
  medicineList.innerHTML = "";
  hospitalName.innerText = "";

  if (medicineDatabase[diseaseInput]) {
    medicineDatabase[diseaseInput].forEach(med => {
      const li = document.createElement("li");
      li.textContent = med;
      medicineList.appendChild(li);
    });
  } else {
    const li = document.createElement("li");
    li.textContent = "No medicines found for this disease.";
    medicineList.appendChild(li);
  }

  // Random hospital
  currentHospital = hospitals[Math.floor(Math.random() * hospitals.length)];
  hospitalName.innerText = `${currentHospital.name}, ${currentHospital.address}`;
}

function redirectToMap() {
  if (currentHospital) {
    const query = encodeURIComponent(currentHospital.name + " " + currentHospital.address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, "_blank");
  } else {
    alert("Generate prescription first.");
  }
}
