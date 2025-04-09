


/* SWITCH ENGLISH TO FRENCH */

const welcome = ["Bienvenue !", "Welcome !"]

const ideesite = ["Ceci est site qui vous propose des compositions TFT du set 14.",  "This is site that offers TFT compositions of set 14."]

const concept = ["Les compositions ont été imaginé par The Blue Frog, ce site propose également un arbre décisionel dans lequelle vous pouvez faire des choix en fonction de la direction que prend votre partie. Il est également possible d'afficher toutes les compositions pour avoir une vue d'ensemble.", "The compositions were conceived by The Blue Frog, this site also offers a decision tree in which you can make choices according to the direction your party takes. It is also possible to display all compositions for an overview." ]

const bonneGame = ["Bonnes games à vous !", "Good games to you !"]


const detail = ["Plus d'info", "More details"]


const creditsThamriel = ["Site designé par Dassy Nathan => discord thamriel", "website designed by Dassy Nathan => discord thamriel"]

const creditsBluefrog = ["Compos imaginé par The Blue Frog => discord albertescalade", "Comps made by Blue frog => discord albertescalade"]


const Textpresentation = document.getElementById("TextPresentation")

const detailbutton = document.querySelectorAll("detailbutton")

const creditThamriel = document.getElementById("creditThamriel")

const creditBluefrog = document.getElementById("creditBluefrog")

const Welcome = document.getElementById("Welcome")

const Ideesite = document.getElementById("ideesite")

const Concept = document.getElementById("concept")

const BonneGame = document.getElementById("bonneGame")


let numberpresentation = 0

let numero = 0

function switchTOengANDfrench(i) {

numberpresentation = numero + i
numero = numberpresentation

if(numero % 2 === 0 ) {
    Welcome.textContent = welcome[0]
    Ideesite.textContent = ideesite[0]
    Concept.textContent = concept[0]
    BonneGame.textContent = bonneGame[0]
    creditBluefrog.textContent = creditsBluefrog[0]
    creditThamriel.textContent = creditsThamriel[0]
} else {
    Welcome.textContent = welcome[1]
    Ideesite.textContent = ideesite[1]
    Concept.textContent = concept[1]
    BonneGame.textContent = bonneGame[1]
    creditBluefrog.textContent = creditsBluefrog[1]
    creditThamriel.textContent = creditsThamriel[1]
}
}






/* Slider code whole Page */
/*
const menu = document.querySelector(".menu")
const button = document.getElementById('buttonheader')


function openmenu() {

    if (menu.classList.contains("active")) {
        closemenu()
    } else {
        menu.classList.add("active")
    }
}

function closemenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active")
    } else {
        return
    }

}
*/

/* First Comp open */

const firstcomp = document.getElementById("FirstComp")
const FirstCompdetail = document.getElementById("FirstCompdetail")

function openFirstcomp() {
    if (firstcomp.classList.contains("active")){
        closeFirstcomp()
    } else {
        firstcomp.classList.add("active")
        FirstCompdetail.classList.add("active")
    }
}

function closeFirstcomp() {
    if (firstcomp.classList.contains("active")) {
        firstcomp.classList.remove("active")
        FirstCompdetail.classList.remove("active")
    } else {
        return
    }

}
    
/* Second Comp open */

const Secondcomp = document.getElementById("SecondComp")
const SecondCompdetail = document.getElementById("SecondCompdetail")

function openSecondcomp() {
    if (Secondcomp.classList.contains("active")){
        closeSecondcomp()
    } else {
        Secondcomp.classList.add("active")
        SecondCompdetail.classList.add("active")
    }
}

function closeSecondcomp() {
    if (Secondcomp.classList.contains("active")) {
        Secondcomp.classList.remove("active")
        SecondCompdetail.classList.remove("active")
    } else {
        return
    }

}

    
/* Third Comp open */

const Thirdcomp = document.getElementById("ThirdComp")
const ThirdCompdetail = document.getElementById("ThirdCompdetail")

function openThirdcomp() {
    if (Thirdcomp.classList.contains("active")){
        closeThirdcomp()
    } else {
        Thirdcomp.classList.add("active")
        ThirdCompdetail.classList.add("active")
    }
}

function closeThirdcomp() {
    if (Thirdcomp.classList.contains("active")) {
        Thirdcomp.classList.remove("active")
        ThirdCompdetail.classList.remove("active")
    } else {
        return
    }

}
   

/* Fourth Comp open */

const Fourthcomp = document.getElementById("FourthComp")
const FourthCompdetail = document.getElementById("FourthCompdetail")

function openFourthcomp() {
    if (Fourthcomp.classList.contains("active")){
        closeFourthcomp()
    } else {
        Fourthcomp.classList.add("active")
        FourthCompdetail.classList.add("active")
    }
}

function closeFourthcomp() {
    if (Fourthcomp.classList.contains("active")) {
        Fourthcomp.classList.remove("active")
        FourthCompdetail.classList.remove("active")
    } else {
        return
    }

}
   

/* Fifth Comp open */

const Fifthcomp = document.getElementById("FifthComp")
const FifthCompdetail = document.getElementById("FifthCompdetail")

function openFifthcomp() {
    if (Fifthcomp.classList.contains("active")){
        closeFifthcomp()
    } else {
        Fifthcomp.classList.add("active")
        FifthCompdetail.classList.add("active")
    }
}

function closeFifthcomp() {
    if (Fifthcomp.classList.contains("active")) {
        Fifthcomp.classList.remove("active")
        FifthCompdetail.classList.remove("active")
    } else {
        return
    }

}
   
 

/* Sixth Comp open */

const Sixthcomp = document.getElementById("SixthComp")
const SixthCompdetail = document.getElementById("SixthCompdetail")

function openSixthcomp() {
    if (Sixthcomp.classList.contains("active")){
        closeSixthcomp()
    } else {
        Sixthcomp.classList.add("active")
        SixthCompdetail.classList.add("active")
    }
}

function closeSixthcomp() {
    if (Sixthcomp.classList.contains("active")) {
        Sixthcomp.classList.remove("active")
        SixthCompdetail.classList.remove("active")
    } else {
        return
    }

}
   
/* Seventh Comp open */

const Seventhcomp = document.getElementById("SeventhComp")
const SeventhCompdetail = document.getElementById("SeventhCompdetail")

function openSeventhcomp() {
    if (Seventhcomp.classList.contains("active")){
        closeSeventhcomp()
    } else {
        Seventhcomp.classList.add("active")
        SeventhCompdetail.classList.add("active")
    }
}

function closeSeventhcomp() {
    if (Seventhcomp.classList.contains("active")) {
        Seventhcomp.classList.remove("active")
        SeventhCompdetail.classList.remove("active")
    } else {
        return
    }

}
   


   
/* Eigth Comp open */

const Eigthcomp = document.getElementById("EigthComp")
const EigthCompdetail = document.getElementById("EigthCompdetail")

function openEigthcomp() {
    if (Eigthcomp.classList.contains("active")){
        closeEigthcomp()
    } else {
        Eigthcomp.classList.add("active")
        EigthCompdetail.classList.add("active")
    }
}

function closeEigthcomp() {
    if (Eigthcomp.classList.contains("active")) {
        Eigthcomp.classList.remove("active")
        EigthCompdetail.classList.remove("active")
    } else {
        return
    }

}
   



   
/* Ninth Comp open */

const Ninthcomp = document.getElementById("NinthComp")
const NinthCompdetail = document.getElementById("NinthCompdetail")

function openNinthcomp() {
    if (Ninthcomp.classList.contains("active")){
        closeNinthcomp()
    } else {
        Ninthcomp.classList.add("active")
        NinthCompdetail.classList.add("active")
    }
}

function closeNinthcomp() {
    if (Ninthcomp.classList.contains("active")) {
        Ninthcomp.classList.remove("active")
        NinthCompdetail.classList.remove("active")
    } else {
        return
    }

}

   
/* Tenth Comp open */

const Tenthcomp = document.getElementById("TenthComp")
const TenthCompdetail = document.getElementById("TenthCompdetail")

function openTenthcomp() {
    if (Tenthcomp.classList.contains("active")){
        closeTenthcomp()
    } else {
        Tenthcomp.classList.add("active")
        TenthCompdetail.classList.add("active")
    }
}

function closeTenthcomp() {
    if (Tenthcomp.classList.contains("active")) {
        Tenthcomp.classList.remove("active")
        TenthCompdetail.classList.remove("active")
    } else {
        return
    }

}
   

 
/* Eleventh Comp open */

const Eleventhcomp = document.getElementById("EleventhComp")
const EleventhCompdetail = document.getElementById("EleventhCompdetail")

function openEleventhcomp() {
    if (Eleventhcomp.classList.contains("active")){
        closeEleventhcomp()
    } else {
        Eleventhcomp.classList.add("active")
        EleventhCompdetail.classList.add("active")
    }
}

function closeEleventhcomp() {
    if (Eleventhcomp.classList.contains("active")) {
        Eleventhcomp.classList.remove("active")
        EleventhCompdetail.classList.remove("active")
    } else {
        return
    }

}
   

 
/* TwelfthComp Comp open */

const Twelfthcomp = document.getElementById("TwelfthComp")
const TwelfthCompdetail = document.getElementById("TwelfthCompdetail")

function openTwelfthcomp() {
    if (Twelfthcomp.classList.contains("active")){
        closeTwelfthcomp()
    } else {
        Twelfthcomp.classList.add("active")
        TwelfthCompdetail.classList.add("active")
    }
}

function closeTwelfthcomp() {
    if (Twelfthcomp.classList.contains("active")) {
        Twelfthcomp.classList.remove("active")
        TwelfthCompdetail.classList.remove("active")
    } else {
        return
    }

}
   



 
/* ThirdteenthComp Comp open */

const Thirdteenthcomp = document.getElementById("ThirdteenthComp")
const ThirdteenthCompdetail = document.getElementById("ThirdteenthCompdetail")

function openThirdteenthcomp() {
    if (Thirdteenthcomp.classList.contains("active")){
        closeThirdteenthcomp()
    } else {
        Thirdteenthcomp.classList.add("active")
        ThirdteenthCompdetail.classList.add("active")
    }
}

function closeThirdteenthcomp() {
    if (Thirdteenthcomp.classList.contains("active")) {
        Thirdteenthcomp.classList.remove("active")
        ThirdteenthCompdetail.classList.remove("active")
    } else {
        return
    }

}
   


 
/* FourteenthComp Comp open */

const Fourteenthcomp = document.getElementById("FourteenthComp")
const FourteenthCompdetail = document.getElementById("FourteenthCompdetail")

function openFourteenthcomp() {
    if (Fourteenthcomp.classList.contains("active")){
        closeFourteenthcomp()
    } else {
        Fourteenthcomp.classList.add("active")
        FourteenthCompdetail.classList.add("active")
    }
}

function closeFourteenthcomp() {
    if (Fourteenthcomp.classList.contains("active")) {
        Fourteenthcomp.classList.remove("active")
        FourteenthCompdetail.classList.remove("active")
    } else {
        return
    }

}

/* FifthteenthComp Comp open */

const fifthteenthcomp = document.getElementById("FifthteenthComp")
const fifthteenthCompdetail = document.getElementById("FifthteenthCompdetail")

function openFifthteenthComp() {
    if (fifthteenthcomp.classList.contains("active")){
        closeFifthteenthComp()
    } else {
        fifthteenthcomp.classList.add("active")
        fifthteenthCompdetail.classList.add("active")
    }
}

function closeFifthteenthComp() {
    if (fifthteenthcomp.classList.contains("active")) {
        fifthteenthcomp.classList.remove("active")
        fifthteenthCompdetail.classList.remove("active")
    } else {
        return
    }

}



/* SixteenthComp Comp open */

const sixteenthcomp = document.getElementById("SixteenthComp")
const sixteenthCompdetail = document.getElementById("SixteenthCompdetail")


function openSixteenthComp() {
    if (sixteenthcomp.classList.contains("active")){
        closeSixteenthComp()
    } else {
        sixteenthcomp.classList.add("active")
        sixteenthCompdetail.classList.add("active")
    }
}

function closeSixteenthComp() {
    if (sixteenthcomp.classList.contains("active")) {
        sixteenthcomp.classList.remove("active")
        sixteenthCompdetail.classList.remove("active")
    } else {
        return
    }

}




let number = 0;

const arrow = ["arrowsvg1", "arrowsvg2", "arrowsvg3", "arrowsvg4", 
    "arrowsvg5", "arrowsvg6", "arrowsvg7", "arrowsvg8", "arrowsvg9", "arrowsvg10", "arrowsvg11", 
"arrowsvg12", "arrowsvg13", "arrowsvg14", "arrowsvg15", "arrowsvg16", "arrowsvg1", "arrowsvg1", ]

function rotatearrow(i) {
    number = i  
    let arrowsvg = document.getElementById(arrow[i])

    if (arrowsvg.classList.contains("active")) {
        arrowsvg.classList.remove("active")
    } else {
        arrowsvg.classList.add("active")
    }
}



/* Faire apparaitre les différents choix pour l'arbre desisionnel */

const FirstComp = document.getElementById("FirstComp");
const SecondComp = document.getElementById("SecondComp");
const ThirdComp = document.getElementById("ThirdComp");
const FourthComp  = document.getElementById("FourthComp");
const FifthComp = document.getElementById("FifthComp");
const SixthComp = document.getElementById("SixthComp");
const SeventhComp = document.getElementById("SeventhComp");
const EigthComp = document.getElementById("EigthComp");
const NinthComp = document.getElementById("NinthComp");
const TenthComp = document.getElementById("TenthComp");
const EleventhComp = document.getElementById("EleventhComp");
const TwelfthComp = document.getElementById("TwelfthComp");
const ThirdteenthComp = document.getElementById("ThirdteenthComp");
const FourteenthComp = document.getElementById("FourteenthComp");
const FifthteenthComp = document.getElementById("FifthteenthComp");
const SixteenthComp = document.getElementById("SixteenthComp");


const BigEcoChoice = document.getElementById("BigEcoChoice");
const Big_economy = document.getElementById("Big_economy");

const LowEcoChoice = document.getElementById("LowEcoChoice");
const Low_economy = document.getElementById("Low_economy");

const Emblem = document.getElementById("Emblem");

const AllComp = document.getElementById("AllComp")

const BigEcoAP = document.getElementById("BigEcoAP")
const BigEcoAPChoice = document.getElementById("BigEcoAPChoice")

const Tears = document.getElementById("Tears")

const APRest = document.getElementById("APrest")

const BigEcoAD = document.getElementById("BigEcoAD")
const BigEcoADChoice = document.getElementById("BigEcoADChoice")

const ADCast = document.getElementById("ADCast")

const ADAS = document.getElementById("ADAS")

const BigEcoFlex = document.getElementById("BigEcoFlex")


const chonccmaster = document.getElementById("chonccmaster")
const chonccdiamond = document.getElementById("chonccdiamond")
const chonccplat = document.getElementById("chonccplat")
const chonccchall = document.getElementById("chonccchall")

function chonccmasterON() {
    chonccmaster.classList.add("on")
}

function chonccmasterOFF() {
    chonccmaster.classList.remove("on")
}

function chonccdiamondON() {
chonccdiamond.classList.add("on")
}

function chonccdiamondOFF() {
chonccdiamond.classList.remove("on")
}

function chonccplatON() {
chonccplat.classList.add("on")
}

function chonccplatOFF() {
chonccplat.classList.remove("on")
}

function chonccchallON() {
chonccchall.classList.add("on")
}

function chonccchallOFF() {
chonccchall.classList.remove("on")
}





function openBigEcoChoice() {

    if (BigEcoChoice.classList.contains("on")) {
        closeBigEcoChoice()

        closeBigEcoAP()
        closeAPRest()
        close3Tears()

        closeBigEcoAD()
        closeADCast()
        closeADAS()
        
        closeBEFlex()

        chonccmasterOFF()

    } else {
        closeLowEcoChoice();

        closeAllComp()

        closeEmblem();

        closeBigEcoAP()
        closeAPRest()
        close3Tears()

        closeBigEcoAD()
        closeADCast()
        closeADAS()

        closeBEFlex()

        closeLowEcoAP()

        closeLowEcoAD()
        closeLowEcoADBack()
        closeLowEcoADFight()

        chonccmasterON()
        chonccchallOFF()
        chonccdiamondOFF()
        chonccplatOFF()

        BigEcoChoice.classList.add("on");
        Big_economy.classList.add("selected");

    }
}

function closeBigEcoChoice() {

    BigEcoChoice.classList.remove("on");
    Big_economy.classList.remove("selected");

}

function openLowEcoChoice() {

    if (LowEcoChoice.classList.contains("on")) {
        closeLowEcoChoice();

        closeLowEcoAP();

        closeLowEcoAD()
        closeLowEcoADBack()
        closeLowEcoADFight()

        chonccdiamondOFF

    } else {
        closeBigEcoChoice();

        closeAllComp()

        closeEmblem();

        closeBigEcoAP()
        closeAPRest()
        close3Tears()

        closeBigEcoAD()
        closeADCast()
        closeADAS

        closeBEFlex()

        closeLowEcoAP()

        closeLowEcoAD()
        closeLowEcoADBack()
        closeLowEcoADFight()

        chonccdiamondON()
        chonccchallOFF()
        chonccmasterOFF()
        chonccplatOFF()

        LowEcoChoice.classList.add("on");
        Low_economy.classList.add("selected");
    }
}

function closeLowEcoChoice() {
    LowEcoChoice.classList.remove("on");
    Low_economy.classList.remove("selected");
}


function openEmblem() {

    if (Emblem.classList.contains("selected")) {
        Emblem.classList.remove("selected");
        closeEmblem();

        chonccplatOFF()

    } else {
        closeAllComp()
        closeBigEcoChoice();
        closeLowEcoChoice();

        closeBigEcoAP()
        closeAPRest()
        close3Tears()

        closeBigEcoAD()
        closeADCast()
        closeADAS()

        closeBEFlex()

        closeLowEcoAP()

        closeLowEcoAD()
        closeLowEcoADBack()
        closeLowEcoADFight()

        chonccplatON()

        chonccchallOFF()
        chonccdiamondOFF()
        chonccmasterOFF()

        Emblem.classList.add("selected");
        TenthComp.classList.add("visible");
        TwelfthComp.classList.add("visible");
        ThirdteenthComp.classList.add("visible");

    }

}

function closeEmblem() {
    Emblem.classList.remove("selected")
    TenthComp.classList.remove("visible");
    TwelfthComp.classList.remove("visible");
    ThirdteenthComp.classList.remove("visible");
}



function openAllComp() {
    if (AllComp.classList.contains("selected")){
        closeAllComp()

        chonccchallOFF()
    } else {
        closeEmblem()
        closeBigEcoChoice();
        closeLowEcoChoice();

        closeBigEcoAP()
        closeAPRest()
        close3Tears()

        closeBigEcoAD()
        closeADCast()
        closeADAS()

        closeBEFlex()

        closeLowEcoAP()

        closeLowEcoAD()
        closeLowEcoADBack()
        closeLowEcoADFight()


        chonccchallON()

        chonccmasterOFF()
        chonccdiamondOFF()
        chonccplatOFF()

        AllComp.classList.add("selected")
        FirstComp.classList.add("visible")
        SecondComp.classList.add("visible")
        ThirdComp.classList.add("visible")
        FourthComp.classList.add("visible")
        FifthComp.classList.add("visible")
        SixthComp.classList.add("visible")
        SeventhComp.classList.add("visible")
        EigthComp.classList.add("visible")
        NinthComp.classList.add("visible")
        TenthComp.classList.add("visible")
        EleventhComp.classList.add("visible")
        TwelfthComp.classList.add("visible")
        ThirdteenthComp.classList.add("visible")
        FourteenthComp.classList.add("visible")
        FifthteenthComp.classList.add("visible")
        SixteenthComp.classList.add("visible")

    }
}

function closeAllComp() {
    AllComp.classList.remove("selected")
    AllComp.classList.remove("selected")
    FirstComp.classList.remove("visible")
    SecondComp.classList.remove("visible")
    ThirdComp.classList.remove("visible")
    FourthComp.classList.remove("visible")
    FifthComp.classList.remove("visible")
    SixthComp.classList.remove("visible")
    SeventhComp.classList.remove("visible")
    EigthComp.classList.remove("visible")
    NinthComp.classList.remove("visible")
    TenthComp.classList.remove("visible");
    EleventhComp.classList.remove("visible")
    TwelfthComp.classList.remove("visible");
    ThirdteenthComp.classList.remove("visible");
    FourteenthComp.classList.remove("visible")
    FifthteenthComp.classList.remove("visible")
    SixteenthComp.classList.remove("visible")
}




function openBigEcoAP() {

    if (BigEcoAP.classList.contains("selected")) {
        closeBigEcoAP()
        close3Tears()
        closeAPRest()

        closeBigEcoAD()
        closeADCast()
        closeADAS()

        closeBEFlex()
    } else {
      
        close3Tears()
        closeAPRest()

        closeBigEcoAD()
        closeADCast()
        closeADAS()

        closeBEFlex() 

        BigEcoAP.classList.add("selected")
        BigEcoAPChoice.classList.add("on")
    }
}

function closeBigEcoAP() {
    BigEcoAP.classList.remove("selected")
    BigEcoAPChoice.classList.remove("on")
}



function open3Tears() {
    if (Tears.classList.contains("selected")) {
        close3Tears()
    } else {
        Tears.classList.add("selected")
        SixteenthComp.classList.add("visible")
    }
}

function close3Tears() {
    Tears.classList.remove("selected")
    SixteenthComp.classList.remove("visible")
}



function openAPRest() {
    if (APRest.classList.contains("selected")) {
        closeAPRest()
    } else {
        APRest.classList.add("selected")
        EigthComp.classList.add("visible")
        SixteenthComp.classList.add("visible")
        TwelfthComp.classList.add("visible")
    }
}

function closeAPRest() {
    APRest.classList.remove("selected")
    EigthComp.classList.remove("visible")
    SixteenthComp.classList.remove("visible")
    TwelfthComp.classList.remove("visible")
}



function openBigEcoAD() {
    if (BigEcoADChoice.classList.contains("on")) {
        closeBigEcoAP()
        close3Tears()
        closeAPRest()

        closeBigEcoAD()
        closeADCast()
        closeADAS()

        closeBEFlex()
    } else {
        closeBigEcoAP()
        close3Tears()
        closeAPRest()

        closeADAS()
        closeADCast()

        closeBEFlex() 
        
        BigEcoAD.classList.add("selected")
        BigEcoADChoice.classList.add("on")
    }
}

function closeBigEcoAD() {
    BigEcoAD.classList.remove("selected")
    BigEcoADChoice.classList.remove("on")
}



function openADAS() {
    if(ADAS.classList.contains("selected")) {
        closeADAS()
    } else {
        ADAS.classList.add("selected")
        NinthComp.classList.add("visible")
        SecondComp.classList.add("visible")
        FirstComp.classList.add("visible")
    }
}

function closeADAS() {
    ADAS.classList.remove("selected")
    NinthComp.classList.remove("visible")
    SecondComp.classList.remove("visible")
    FirstComp.classList.remove("visible")
}


function openADCast() {
    if(ADCast.classList.contains("selected")){
        closeADCast()
    } else {
        ADCast.classList.add("selected")
        FirstComp.classList.add("visible")
        EleventhComp.classList.add("visible")
    }

}

function closeADCast() {
    ADCast.classList.remove("selected")
    FirstComp.classList.remove("visible")
    EleventhComp.classList.remove("visible")
}



function openBEFlex() {
    if (BigEcoFlex.classList.contains("selected")){
        closeBEFlex()
    } else {
       
        closeBigEcoAP()
        close3Tears()
        closeAPRest()

        closeBigEcoAD()
        closeADAS()
        closeADCast() 
        
        BigEcoFlex.classList.add("selected")
        SecondComp.classList.add("visible")
        EleventhComp.classList.add("visible")
        /*COMP A RAJOUTER*/
    }

}

function closeBEFlex() {
    BigEcoFlex.classList.remove("selected")
    SecondComp.classList.remove("visible")
    EleventhComp.classList.remove("visible")
    /*COMP A RAJOUTER*/
}



const LowEcoAP = document.getElementById("LowEcoAP")

function openLowEcoAP(){
    if(LowEcoAP.classList.contains("selected")){
        closeLowEcoAP()
    } else {
        closeLowEcoAD()
        closeLowEcoADBack()
        closeLowEcoADFight()  
        
        LowEcoAP.classList.add("selected")
        FourteenthComp.classList.add("visible")
        EigthComp.classList.add("visible")
        FourthComp.classList.add("visible")
        FifthteenthComp.classList.add("visible")
    }
}


function closeLowEcoAP() {
    LowEcoAP.classList.remove("selected")
    FourteenthComp.classList.remove("visible")
    EigthComp.classList.remove("visible")
    FourthComp.classList.remove("visible")
    FifthteenthComp.classList.remove("visible")
}



const LowEcoADChoice = document.getElementById("LowEcoADChoice")
const LowEcoAD = document.getElementById("LowEcoAD")

function openLowEcoAD() {
    if(LowEcoADChoice.classList.contains("on")) {
        closeLowEcoAD()
        closeLowEcoADBack()
        closeLowEcoADFight()
    } else {
        closeLowEcoAP()

        LowEcoADChoice.classList.add("on")
        LowEcoAD.classList.add("selected")
    }
}

function closeLowEcoAD() {
    LowEcoADChoice.classList.remove("on")
    LowEcoAD.classList.remove("selected")
}


const LowEcoADBack = document.getElementById("LowEcoADBack")

function openLowEcoADBack() {
    if(LowEcoADBack.classList.contains("selected")){
        closeLowEcoADBack()
    } else {
        LowEcoADBack.classList.add("selected")
        SeventhComp.classList.add("visible")
        SixthComp.classList.add("visible")
        /*COMP A RAJOUTER*/
    }
}

function closeLowEcoADBack() {
    LowEcoADBack.classList.remove("selected")
    SeventhComp.classList.remove("visible")
    SixthComp.classList.remove("visible")
    /*COMP A RAJOUTER*/
}




const LowEcoADFight = document.getElementById("LowEcoADFight")

function openLowEcoADFight() {
    if (LowEcoADFight.classList.contains("selected")) {
        closeLowEcoADFight()
    } else {
        LowEcoADFight.classList.add("selected")
        ThirdComp.classList.add("visible")
        ThirdteenthComp.classList.add("visible")
        SecondComp.classList.add("visible")
    }
}

function closeLowEcoADFight() {

    LowEcoADFight.classList.remove("selected");
    ThirdComp.classList.remove("visible")
    ThirdteenthComp.classList.remove("visible")
    SecondComp.classList.remove("visible")
}