// Importieren von notwendigen Modulen
import fs from 'fs'; // Modul zum Lesen und Schreiben von Dateien
// import os from 'os'; // Modul zum Lesen von Betriebssysteminformationen
import chalk from 'chalk'; // Modul zur Farbgebung von Konsolenausgaben
import inquirer from 'inquirer'; // Modul zur Interaktion mit dem Benutzer

const jsonData = [{
  "firstName": "filly",
  "lastName": "ford",
  "age": "99",
  "hobby": "Sonstiges",
  "os": "win32"
}]

// Funktion zum Erstellen des Benutzerprofils
function createProfile() {
  // Fragen an den Benutzer mit Hilfe von `inquirer` stellen
  inquirer
    .prompt([
      {
        name: 'firstName',
        message: 'Vorname:', // Frage nach dem Vornamen
        type: 'input', 
      },
      {
        name: 'lastName',
        message: 'Nachname:', // Frage nach dem Nachnamen
        type: 'input', 
      },
      {
        name: 'age',
        message: 'Alter:', // Frage nach dem Alter
        type: 'input', 
      },
      {
        name: 'hobby',
        message: 'Hobby:', // Frage nach dem Hobby
        type: 'list', 
        choices: [
          'Lesen',
          'Sport',
          'Musik', 
          'Reisen', 
          'Sonstiges', 
        ],
      },
    ])
    .then((answers) => { 
      const { firstName, lastName, age, hobby } = answers; // Extrahieren der Antworten

      // Erstellen des Benutzerprofils als JavaScript-Objekt
      const profile = {
        firstName, 
        lastName, 
        age, 
        hobby, 
        // os: os.platform(), // Betriebssystem des Benutzers
      };
      const profileData = JSON.stringify(profile, null, 2); // Formatieren des Profils als JSON-String

      // Ausgabe des erstellten Benutzerprofils auf der Konsole
      console.log(chalk.yellow('Benutzerprofil erstellt:'));
      console.log(chalk.cyan('Vorname:'), chalk.bgGray.green(firstName));
      console.log(chalk.cyan('Nachname:'), chalk.bgGray.green(lastName));
      console.log(chalk.cyan('Alter:'), chalk.bgRed.blueBright(age));
      console.log(chalk.cyan('Hobby:'), chalk.bgCyan.black(hobby));
      // console.log(chalk.cyan('Betriebssystem:'), chalk.bgMagenta.yellowBright(profile.os));

      if (fs.existsSync('profile.json')) {
        //file exists
      }
        else {
          fs.writeFileSync('profile.json', "[]");
        }
      // Speichern des Benutzerprofils in einer JSON-Datei
      const Daten = fs.readFileSync('profile.json')
  
        
        var json = JSON.parse(Daten)
        
        console.log(JSON.stringify(profile) + "profile");
        json.push(profile);
    
        fs.writeFileSync("profile.json", JSON.stringify(json))


    });
  }

console.log(chalk.yellow('Starte die Profilerstellung...')); 

// Benutzerprofil erstellen
createProfile(); // Aufruf der Funktion zum Erstellen des Benutzerprofils
