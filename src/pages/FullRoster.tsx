import React, { useState } from 'react';
import Modal from 'react-modal';
import './FullRoster.css';
import { X, Users, Image as ImageIcon } from 'lucide-react';
Modal.setAppElement('#root');
//TODO PICS: Gamma, Delta, AEs
const roster = {
  Alpha: {
    classPicture: '/alphas.jpg',
    members: [
      { number: 1, name: 'Tony Mai', brotherName: 'KidRobot' },
      { number: 2, name: 'Romel Pancho', brotherName: 'F.E.A.R.' },
      { number: 3, name: 'Jonathan Barlaan', brotherName: 'Impound' },
      { number: 4, name: 'Billy Bui', brotherName: 'Easy Rider' },
      { number: 5, name: 'Don Dau', brotherName: 'Prestige' },
      { number: 6, name: 'Daniel Lalican', brotherName: 'O.U.T.C.A.S.T.' },
      { number: 7, name: 'Tuan Le', brotherName: 'Four Ize' },
      { number: 8, name: 'Newton Nguyen', brotherName: 'The Kount' },
      { number: 9, name: 'Michael Montuno', brotherName: 'Ballistic' },
      { number: 10, name: 'Johnny Nguyen', brotherName: 'Primal' },
    ],
  },
  Beta: {
    classPicture: '/betas.jpg',
    members: [
      { number: 11, name: 'Richard Barrido', brotherName: 'Bloodlust' },
      { number: 12, name: 'Raphael Rivera', brotherName: 'Amun-Ra' },
      { number: 13, name: 'Renato Marciano', brotherName: 'Kartel' },
      { number: 14, name: 'Thierry Phouthavong', brotherName: 'T.K.O.' },
      { number: 15, name: 'Danny Boyette', brotherName: 'D.R.O.I.D.' },
      { number: 16, name: 'Christian Reynes', brotherName: 'Rebel Ape' },
    ],
  },
  Gamma: {
    classPicture: '/gamma.jpg',
    members: [
    { number: 17, name: 'Lam Nguyen', brotherName: 'E.L.I.T.E.' },
   ],
  },
  Delta: {
    classPicture: '/deltas.png',
    members: [
      { number: 18, name: 'Nino Fajardo', brotherName: 'Kode Red' },
      { number: 19, name: 'Jeffery Lim', brotherName: 'Ironclad' },
      { number: 20, name: 'Luis Lozano', brotherName: 'Falsetto' },
      { number: 21, name: 'Jeff Gao', brotherName: 'COMBAT' },
      { number: 22, name: 'Kishan Fichadiya', brotherName: 'EMBLEM' },
    ],
  },
  Epsilon: {
    classPicture: '/epsilons.jpg',
    members: [
      { number: 23, name: 'Justin Mayo', brotherName: 'R.S.X.' },
      { number: 24, name: 'Edwin Agabin', brotherName: 'OMEN' },
      { number: 25, name: 'Mike Truong', brotherName: 'C.H.R.O.M.E.' },
      { number: 26, name: 'Michael Nation', brotherName: 'Axis' },
      { number: 27, name: 'Christian Alvarez', brotherName: 'Bahamut' },
    ],
  },
  Zeta: {
    classPicture: '/zetas.JPG',
    members: [
      { number: 28, name: 'John Sia', brotherName: 'Facebook' },
      { number: 29, name: 'Camilo Moya', brotherName: 'D-Slang' },
      { number: 30, name: 'Scotty Patria', brotherName: 'Justified' },
    ],
  },
  Eta: {
    classPicture: '/etas.jpg',
    members: [
      { number: 31, name: 'Bob James Cal', brotherName: 'illest' },
      { number: 32, name: 'Joey Frye', brotherName: 'Jetpack' },
      { number: 33, name: 'Vinh Nguyen', brotherName: 'A.B.S.I.N.T.H.E.' },
      { number: 34, name: 'Tim Roberts', brotherName: 'Brigade' },
    ],
  },
  Theta: {
    classPicture: '/thetas.JPG',
    members: [
      { number: 35, name: 'Khai Ho', brotherName: 'yukMOUTH' },
      { number: 36, name: 'Jimee Truong', brotherName: 'Krimson' },
      { number: 37, name: 'Daniel Kinjo', brotherName: 'Trilogy' },
      { number: 38, name: 'Vinson Cao', brotherName: 'Volatile' },
      { number: 39, name: 'Liam Egan', brotherName: 'LockOUT' },
      { number: 40, name: 'Jean-Paul Parenteau', brotherName: 'O-ZONE' },
      { number: 41, name: 'Alexander Parker', brotherName: 'Ascension' },
    ],
  },
  Iota: {
    classPicture: '/iotas.jpg',
    members: [
      { number: 42, name: 'Uriel Garcia', brotherName: 'Fuego' },
      { number: 43, name: 'Taro Miyabayashi', brotherName: 'Manifest' },
      { number: 44, name: 'Andy Mai', brotherName: 'Cutlass' },
      { number: 45, name: 'Michael Miglio', brotherName: 'Antidote' },
      { number: 46, name: 'Jason Reyes', brotherName: 'EXECUTIONER' },
      { number: 47, name: 'Albert Reyes', brotherName: 'Asylum' },
    ],
  },
  Kappa: {
    classPicture: '/kappas.JPG',
    members: [
      { number: 48, name: 'Nic Dale', brotherName: 'Cardinal' },
      { number: 49, name: 'Tim Garcia', brotherName: 'Skyfall' },
      { number: 50, name: 'Khoi Nguyen', brotherName: 'Kutthroat' },
      { number: 51, name: 'Casper Yen', brotherName: 'KING TUT' },
      { number: 52, name: 'Thomas Nguyen', brotherName: 'R.A.Y.Q.U.A.Z.A.' },
      { number: 53, name: 'Richard Han', brotherName: 'The Decision' },
    ],
  },
  Lambda: {
    classPicture: '/lambdas.jpg',
    members: [
      { number: 54, name: 'Juan Chau', brotherName: 'UPROAR' },
      { number: 55, name: 'Quan Nguyen', brotherName: 'Seeker' },
      { number: 56, name: 'The Phung', brotherName: 'WARLOCK' },
      { number: 57, name: 'Jimmy Nguyen', brotherName: 'Minotaur' },
      { number: 58, name: 'Dat Pham', brotherName: 'Death Adder' },
      { number: 59, name: 'Brandom Pham', brotherName: 'Death Adder' },
    ],
  },
  Mu: {
    classPicture: '/mus.jpg',
    members: [
      { number: 61, name: 'Andy Le', brotherName: 'Hardstyle' },
      { number: 62, name: 'Bryan San Antonio', brotherName: 'SCARAB' },
      { number: 63, name: 'Devin Tran', brotherName: 'KNIVES' },
      { number: 64, name: 'Scott Wu', brotherName: 'The Equalizer' },
      { number: 65, name: 'Son Nguyen', brotherName: 'Kritical' },
      { number: 66, name: 'Quy Van', brotherName: 'DEADLIFT' },
      { number: 67, name: 'Ju’Von Nathan', brotherName: 'Bankai' },
      { number: 68, name: 'Kevin Tran', brotherName: 'Kronos' },
    ],
  },
  Nu: {
    classPicture: '/nus.jpg',
    members: [
      { number: 69, name: 'Daniel Phan', brotherName: 'Klassic' },
      { number: 70, name: 'Tan Tran', brotherName: 'R.A.I.K.O.U.' },
      { number: 71, name: 'Quan Huynh', brotherName: 'Global' },
      { number: 72, name: 'David Dang', brotherName: 'TENSEIGA' },
      { number: 73, name: 'Christian Oosthuizen', brotherName: 'Cashout' },
    ],
  },
  Omicron: {
    classPicture: '/omicrons.jpeg',
    members: [
      { number: 74, name: 'Jordan Reyes', brotherName: 'DEATH KNIGHT' },
      { number: 75, name: 'Judsy Cabatana', brotherName: 'Deuterium' },
      { number: 76, name: 'Michael Nguyen', brotherName: 'Arachnid' },
      { number: 77, name: 'Minh Nguyen', brotherName: 'KILL SWITCH' },
      { number: 78, name: 'Tai Haile', brotherName: 'SHENRON' },
      { number: 79, name: 'Kenny Nguyen', brotherName: 'illicit' },
      { number: 80, name: 'Randy Tran', brotherName: 'Kloud 9' },

    ],
  },
  Rho: {
    classPicture: '/rhos_desired.jpg',
    members: [
      { number: 81, name: 'Calvin Nguyen', brotherName: 'HYPERBEAST' },
      { number: 82, name: 'Joshua Abrahan', brotherName: 'HORUS' },
      { number: 83, name: 'Sean DiPietro', brotherName: 'Kovert' },
      { number: 84, name: 'Brandon Lim', brotherName: 'CLASS WAR' },
      { number: 85, name: 'Vladimir Shpilchevskiy', brotherName: 'LUXOR' },
      { number: 86, name: 'Jarrod Van Loon', brotherName: 'LETHAL' },
    ],
  },
  Sigma: {
    classPicture: '/sigmas.JPG',
    members: [
      { number: 87, name: 'Thomas Dang', brotherName: 'GUNMETAL' },
      { number: 88, name: 'Kevin Ly', brotherName: 'Aurelius' },
      { number: 89, name: 'Dominic Gamonez', brotherName: 'SOBEK' },
      { number: 90, name: 'James Wang', brotherName: 'ENDGAME' },
      { number: 91, name: 'Thomas Lam', brotherName: 'G.O.D.L.I.K.E.' },
      { number: 92, name: 'Harrison Do', brotherName: 'Prophecy' },
      { number: 93, name: 'Giovanni Ragusa', brotherName: 'GILGAMESH' },
    ],
  },
  Tau: {
    classPicture: '/taus.JPG',
    members: [
      { number: 94, name: 'Albert Cala', brotherName: 'CONQUEROR' },
      { number: 95, name: 'Brandon Le', brotherName: 'SHOGANAI' },
      { number: 96, name: 'Khuong Mai', brotherName: 'Excursion' },
      { number: 97, name: 'Son Cao', brotherName: 'Krucible' },
    ],
  },
  Upsilon: {
    classPicture: '/upsilons.jpg',
    members: [
      { number: 99, name: 'Luan Phan', brotherName: 'SHINSEIDO' },
      { number: 100, name: 'Derick Vo', brotherName: 'Infinitum' },
      { number: 101, name: 'Dat Huynh', brotherName: 'UNDISPUTED' },
      { number: 102, name: 'Eduardo Chong', brotherName: 'NORGAMI' },
      { number: 104, name: 'Tommy Tran', brotherName: 'NAUCRATIS' },
      { number: 105, name: 'Sean Williams', brotherName: 'KHONSU' },
    ],
  },
  Phi: {
    classPicture: '/phis.jpg',
    members: [
      { number: 106, name: 'Andrew Nguyen', brotherName: 'R.E.S.U.R.E.C.T.I.O.N.' },
      { number: 107, name: 'Tee Chulikavit', brotherName: 'Archimedes' },
      { number: 108, name: 'Anthony Nguyen', brotherName: 'Kalamity' },
      { number: 109, name: 'Alvin Ly', brotherName: 'RESET' },
      { number: 110, name: 'Kwabena Casimir', brotherName: 'Galand' },
    ],
  },
  Chi: {
    classPicture: '/chis.JPG',
    members: [
      { number: 111, name: 'Kevin Dau', brotherName: 'CARTHAGE' },
      { number: 112, name: 'Frank Guzman', brotherName: 'BABYLON' },
      { number: 113, name: 'Minh-Kha Vu', brotherName: 'CAPTIVATE' },
    ],
  },
  Psi: {
    classPicture: '/psis.jpg',
    members: [
    { number: 114, name: 'Jonah Mazzone', brotherName: 'SLAYER' },
    { number: 115, name: 'Danny Truong', brotherName: 'CALAIS' },
    { number: 116, name: 'Thomas Pham', brotherName: 'Playmaker' },
    { number: 117, name: 'Harvey Dang', brotherName: 'Valorum' },
    { number: 118, name: 'Christopher Pham', brotherName: 'NOXUS' },
    ],
  },
  Omega:{ 
    classPicture: '/omegas.jpg',
    members: [
    { number: 119, name: 'Vanny Ho', brotherName: 'LEGEND' },
    { number: 120, name: 'Edison Lin', brotherName: 'DNR' },
    { number: 121, name: 'Kervensky Anestil', brotherName: 'Mogul' },
    { number: 122, name: 'Moses Phan', brotherName: 'SHROUD' },
    { number: 123, name: 'Kevin Pham', brotherName: 'HELLBENT' },
    ],
  },
  'Alpha Alpha': {
    classPicture: '/AAs_smile.JPG',
    members: [
      { number: 124, name: 'Benjamin Nguyen', brotherName: 'Kartier' },
      { number: 125, name: 'Bill Tran', brotherName: 'Kanon' },
      { number: 126, name: 'Brian Jiang', brotherName: 'BLOODBATH' },
    ],
  },
  'Alpha Beta': {
    classPicture: '/ABs.JPG',
    members: [
      { number: 127, name: 'Andrew Chau', brotherName: 'Godspeed' },
      { number: 128, name: 'Nickolas Chan', brotherName: 'KAMINO' },
      { number: 129, name: 'Gabriel Rosales', brotherName: 'Kothar' },
      { number: 130, name: 'David Kim', brotherName: 'FANATIC' },
    ],
  },
  'Alpha Gamma': {
    classPicture: '/AGs.jpeg',
    members: [
      { number: 131, name: 'Julian Legaspi', brotherName: 'Kold-Blooded' },
      { number: 132, name: 'Diego Adesso', brotherName: 'INQUISITOR' },
      { number: 133, name: 'Harrison Hong', brotherName: 'DEIMOS' },
      { number: 134, name: 'Jeff Chen', brotherName: 'LASTBREATH' },
      { number: 135, name: 'Andy Zheng', brotherName: 'KENPACHI' },
      { number: 136, name: 'Mike Phan', brotherName: 'CHOSEN ONE' },
      { number: 137, name: 'Dillon Berger', brotherName: 'KHEPERA' },
    ],
  },
  'Alpha Delta': {
    classPicture: '/ADs.png',
    members: [
      { number: 138, name: 'Aaron Tran', brotherName: 'FLASHBACK' },
      { number: 139, name: 'Thomveebol Phorn', brotherName: 'Kaliburn' },
      { number: 140, name: 'Chandee De Jesus', brotherName: 'P.U.R.G.A.T.O.R.Y.' },
    ],
  },
    'Alpha Epsilon': {
      classPicture: '/AEs.JPG',
      members: [
        { number: 141, name: 'Brandon Nguyen', brotherName: 'Kavalry' },
        { number: 142, name: 'Shawn Nguyen', brotherName: 'SHADOWBORN' },
        { number: 143, name: 'Moe Almasri', brotherName: 'FRANCHISE' },
      ],
    },
  };

  const greekAlphabet = [
    { greek: 'Α', english: 'Alpha' },
    { greek: 'Β', english: 'Beta' },
    { greek: 'Γ', english: 'Gamma' },
    { greek: 'Δ', english: 'Delta' },
    { greek: 'Ε', english: 'Epsilon' },
    { greek: 'Ζ', english: 'Zeta' },
    { greek: 'Η', english: 'Eta' },
    { greek: 'Θ', english: 'Theta' },
    { greek: 'Ι', english: 'Iota' },
    { greek: 'Κ', english: 'Kappa' },
    { greek: 'Λ', english: 'Lambda' },
    { greek: 'Μ', english: 'Mu' },
    { greek: 'Ν', english: 'Nu' },
    { greek: 'Ο', english: 'Omicron' },
    { greek: 'Ρ', english: 'Rho' },
    { greek: 'Σ', english: 'Sigma' },
    { greek: 'Τ', english: 'Tau' },
    { greek: 'Υ', english: 'Upsilon' },
    { greek: 'Φ', english: 'Phi' },
    { greek: 'Χ', english: 'Chi' },
    { greek: 'Ψ', english: 'Psi' },
    { greek: 'Ω', english: 'Omega' },
    { greek: 'ΑΑ', english: 'Alpha Alpha' },
    { greek: 'ΑΒ', english: 'Alpha Beta' },
    { greek: 'ΑΓ', english: 'Alpha Gamma' },
    { greek: 'ΑΔ', english: 'Alpha Delta' },
    { greek: 'ΑΕ', english: 'Alpha Epsilon' },
  ];
  
  const classYears = {
    'Alpha': 'Fall 2008',
    'Beta': 'Spring 2009',
    'Gamma': 'Fall 2009',
    'Delta': 'Spring 2010',
    'Epsilon': 'Fall 2010',
    'Zeta': 'Spring 2011',
    'Eta': 'Fall 2011',
    'Theta': 'Spring 2012',
    'Iota': 'Fall 2012',
    'Kappa': 'Spring 2013',
    'Lambda': 'Fall 2013',
    'Mu': 'Spring 2015',
    'Nu': 'Fall 2015',
    'Omicron': 'Fall 2016',
    'Rho': 'Fall 2017',
    'Sigma': 'Spring 2018',
    'Tau': 'Fall 2018',
    'Upsilon': 'Spring 2019',
    'Phi': 'Fall 2019',
    'Chi': 'Spring 2020',
    'Psi': 'Spring 2021',
    'Omega': 'Fall 2021',
    'Alpha Alpha': 'Spring 2022',
    'Alpha Beta': 'Fall 2022',
    'Alpha Gamma': 'Spring 2023',
    'Alpha Delta': 'Fall 2023',
    'Alpha Epsilon': 'Spring 2024',
  };
  
  const getGreekLabel = (index) => {
    return greekAlphabet[index].greek;
  };
  
  const getEnglishLabel = (index) => {
    return greekAlphabet[index].english;
  };
  
  const FullRoster = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ 
      title: '', 
      className: '',
      subtext: '', 
      classPicture: '', 
      people: [] 
    });
  
    const openModal = (index) => {
      const className = getEnglishLabel(index);
      const classData = roster[className] || { classPicture: '', members: [] };
      setModalContent({ 
        title: `${className} Class`, 
        className: className,
        subtext: classYears[className] || 'Semester Year', 
        classPicture: classData.classPicture,
        people: classData.members 
      });
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
    };
  
    const formatBrotherInfo = (className, person) => (
      <div className="text-lg">
        <span className="text-white font-Rijusans">{className} #{person.number} - {person.name} </span>
        <span className="text-red-500 font-RijusansItalic font-bold">({person.brotherName})</span>
      </div>
    );
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-900 py-12 px-4 animate-gradient">
        <div className="max-w-7xl mx-auto animate-fade-in">
          <h1 className="text-5xl font-bold mb-16 text-center text-white">
            Brothers of Chi Chapter
          </h1>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {Array.from({ length: greekAlphabet.length }, (_, i) => (
              <button
                key={i}
                onClick={() => openModal(i)}
                className="class-button rounded-xl p-6"
              >
                <div className="flex flex-col items-center justify-center space-y-2">
                  <span className="text-4xl font-bold">{getGreekLabel(i)}</span>
                  <span className="text-sm opacity-80">{getEnglishLabel(i)}</span>
                </div>
              </button>
            ))}
          </div>
  
          <Modal 
            isOpen={modalIsOpen} 
            onRequestClose={closeModal} 
            contentLabel="Class Modal"
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-6xl h-[85vh] bg-gray-900 rounded-2xl shadow-2xl outline-none"
            overlayClassName="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm"
          >
            <div className="h-full flex flex-col">
              {/* Modal Header */}
              <div className="bg-red-900 p-6 relative">
                <button 
                  onClick={closeModal}
                  className="absolute right-4 top-4 text-white hover:text-gray-300 transition-colors"
                >
                  <X size={24} />
                </button>
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-white mb-1">{modalContent.title}</h2>
                  <p className="text-gray-300 text-2xl font-bold font-Rijusans">{modalContent.subtext}</p>
                </div>
              </div>
  
              {/* Modal Body - Single Scrollable Section */}
              <div className="flex-1 overflow-y-auto p-6">
                {/* Class Picture */}
                <div className="mb-8">
                  <div className="rounded-xl overflow-hidden bg-gray-800">
                    {modalContent.classPicture ? (
                      <img
                        src={modalContent.classPicture}
                        alt={`${modalContent.title} Picture`}
                        className="w-full h-auto max-h-[400px] object-contain"
                      />
                    ) : (
                      <div className="h-[300px] flex items-center justify-center bg-gray-800">
                        <div className="flex flex-col items-center text-gray-500">
                          <ImageIcon size={48} />
                          <span className="mt-2">Class Picture</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
  
                {/* Members List */}
                <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2">
                  {modalContent.people.map((person) => (
                    <div 
                      key={person.number}
                      className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      {formatBrotherInfo(modalContent.className, person)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    );
  };
  
  export default FullRoster;
