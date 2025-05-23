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
      { number: 1, name: 'Tony Mai1', brotherName: 'KidRobot', big: '(UF) A #15 - John Lam (Venom)', little: 'B #16 - Christian Reynes (Rebel Ape) & Δ #20 - Luis Lozano (Falsetto)' },
      { number: 2, name: 'Romel Pancho', brotherName: 'F.E.A.R.', big: '(UF) B #30 - Tri Bui (U.R.B.A.N.)', little: 'Γ #17 - Lam Nguyen (E.L.I.T.E)' },
      { number: 3, name: 'Jonathan Barlaan', brotherName: 'Impound', big: '(UF) A #11 - Peter Nguyen (Rocafella)', little: 'E #27 - Christian Alvarez (Bahamut) & K #53 - Richard Han (The Decision)' },
      { number: 4, name: 'Billy Bui', brotherName: 'Easy Rider', big: '(UF) A #8 - Arif Ahmed (Brick)', little: 'B #11 - Richard Barrido (Bloodlust)' },
      { number: 5, name: 'Don Dau', brotherName: 'Prestige', big: '(UF) B #21 - Loc Le (Thundercat)', little: 'B #12 - Raphael Rivera (Amun-Ra)' },
      { number: 6, name: 'Daniel Lalican', brotherName: 'O.U.T.C.A.S.T.', big: '(UF) A #3 - Alex Ho (N.W.O)', little: 'B #15 - Danny Boyette (D.R.O.I.D.)' },
      { number: 7, name: 'Tuan Le', brotherName: 'Four Ize', big: '(UF) Δ #40  - Mauricio Molina (Deadlock)', little: 'E #26 - Michael Nation (Axis)' },
      { number: 8, name: 'Newton Nguyen', brotherName: 'The Kount', big: '(UF) Δ #44 - Loc Nguyen (Konvict)', little: 'B #13 - Renato Marciano (Kartel)' },
      { number: 9, name: 'Michael Montuno', brotherName: 'Ballistic', big: '(UF) Δ #41 - Daniel Cuevas (Bob-omb)', little: 'Δ #19 - Jeffrey Lim (Ironclad)' },
      { number: 10, name: 'Johnny Nguyen', brotherName: 'Primal', big: '(UCF) A #7 - Ricky Ly (Red Tide)', little: 'B #14 - Thierry Phouthavong (T.K.O.) & Δ #22 - Kishan Fichadiya (EMBLEM)'  },
    ],
  },
  Beta: {
    classPicture: '/betas.jpg',
    members: [
      { number: 11, name: 'Richard Barrido', brotherName: 'Bloodlust', big: 'A #4 - Billy Bui (Easy Rider)', little: ' Z #29 - Camilo Moya (D-Slang) & Θ #40 - Jean-Paul Parenteau (O-ZONE)' },
      { number: 12, name: 'Raphael Rivera', brotherName: 'Amun-Ra', big: 'A #5 - Don Dau (Prestige)', little: 'E #23 - Justin Mayo (R.S.X.) & E #24 - Edwin Agabin (OMEN)' },
      { number: 13, name: 'Renato Marciano', brotherName: 'Kartel', big: 'A #8 - Newton Nguyen (The Kount)', little: 'Δ #18 - Niño Fajardo (Kode Red), Θ #36 - Jimee Truong (Krimson)' },
      { number: 14, name: 'Thierry Phouthavong', brotherName: 'T.K.O.', big: 'A #10 - Johnny Nguyen (Primal)', little: 'Δ #21 - Jeff Gao (COMBAT) & Z #30 - Scotty Patria (Justified)' },
      { number: 15, name: 'Danny Boyette', brotherName: 'D.R.O.I.D.', big: 'A #6 - Daniel Lalican (O.U.T.C.A.S.T.)', little: 'Η #33 - Vinh Nguyen (A.B.S.I.N.T.H.E.)' },
      { number: 16, name: 'Christian Reynes', brotherName: 'Rebel Ape', big: 'A #1 - Tony Mai (KidRobot)' },
    ],
  },
  Gamma: {
    classPicture: '/gamma.jpg',
    members: [
    { number: 17, name: 'Lam Nguyen', brotherName: 'E.L.I.T.E.', big: 'A #2 - Romel Pancho (F.E.A.R.)', little: 'E #25 - Mike Truong (C.H.R.O.M.E.)' },
   ],
  },
  Delta: {
    classPicture: '/deltas.png',
    members: [
      { number: 18, name: 'Niño Fajardo', brotherName: 'Kode Red', big: 'B #13 - Renato Marciano (Kartel)' },
      { number: 19, name: 'Jeffrey Lim', brotherName: 'Ironclad', big: 'A #9 - Michael Montuno (Ballistic)', little: 'H #34 - Tim Roberts (Brigade)' },
      { number: 20, name: 'Luis Lozano', brotherName: 'Falsetto', big: 'A #1 - Tony Mai (KidRobot)', little: 'I #42 - Uriel Garcia (Fuego)' },
      { number: 21, name: 'Jeff Gao', brotherName: 'COMBAT', big: 'B #14 - Thierry Phouthavong (T.K.O.)', little: 'H #32 - Joey Frye (Jetpack)' },
      { number: 22, name: 'Kishan Fichadiya', brotherName: 'EMBLEM', big: 'A #10 - Johnny Nguyen (Primal)', little: 'I #44 - Andy Mai (Cutlass) & I #46 - Jason Reyes (EXECUTIONER)' },
    ],
  },
  Epsilon: {
    classPicture: '/epsilons.jpg',
    members: [
      { number: 23, name: 'Justin Mayo', brotherName: 'R.S.X.', big: 'B #12 - Raphael Rivera (Amun-Ra)' },
      { number: 24, name: 'Edwin Agabin', brotherName: 'OMEN', big: 'B #12 - Raphael Rivera (Amun-Ra)', little: 'H #31 - Bob James Cal (illest) & Θ #35 - Khai Ho (yukMOUTH)' },
      { number: 25, name: 'Mike Truong', brotherName: 'C.H.R.O.M.E.', big: 'Γ #17 - Lam Nguyen (E.L.I.T.E.)' },
      { number: 26, name: 'Michael Nation', brotherName: 'Axis', big: 'A #6 - Tuan Le (Four Ize)', little: 'Z #28 - John Sia (Facebook)' },
      { number: 27, name: 'Christian Alvarez', brotherName: 'Bahamut', big: 'A #3  - Jonathan Barlaan (Impound)', little: 'Θ #41 - Alexander Parker (Ascension)' },
    ],
  },
  Zeta: {
    classPicture: '/zetas.JPG',
    members: [
      { number: 28, name: 'John Sia', brotherName: 'Facebook', big: 'E #26 - Michael Nation (Axis)', little: 'Θ #39 - Liam Egan (LockOUT)' },
      { number: 29, name: 'Camilo Moya', brotherName: 'D-Slang', big: 'B #11 - Richard Barrido (Bloodlust)', little: 'Θ #37 - Daniel Kinjo (Trilogy)' },
      { number: 30, name: 'Scotty Patria', brotherName: 'Justified', big: 'B #14 - Thierry Phouthavong (T.K.O.)', little: 'Θ #38 - Vinson Cao (Volatile)' },
    ],
  },
  Eta: {
    classPicture: '/etas.jpg',
    members: [
      { number: 31, name: 'Bob James Cal', brotherName: 'illest', big: 'E #24 - Edwin Agabin (OMEN)', little: 'I #47 - Albert Reyes (Asylum) & Λ #58 - Dat Pham (Death Adder)' },
      { number: 32, name: 'Joey Frye', brotherName: 'Jetpack', big: 'Δ #21 - Jeff Gao (COMBAT)', little: 'Λ #59 - Brandom Pham (Tartarus)' },
      { number: 33, name: 'Vinh Nguyen', brotherName: 'A.B.S.I.N.T.H.E.', big: 'B #15 - Danny Boyette (D.R.O.I.D.)', little: 'K #52 - Thomas Nguyen (R.A.Y.Q.U.A.Z.A.)' },
      { number: 34, name: 'Tim Roberts', brotherName: 'Brigade', big: 'Δ #19 - Jeffrey Lim (Ironclad)', little: 'I #43 - Taro Miyabayashi (Manifest)' },
    ],
  },
  Theta: {
    classPicture: '/thetas.JPG',
    members: [
      { number: 35, name: 'Khai Ho', brotherName: 'yukMOUTH', big: 'E #24 - Edwin Agabin (OMEN)', little: 'K #51 - Casper Yen (KING TUT)' },
      { number: 36, name: 'Jimee Truong', brotherName: 'Krimson', big: 'B #13 - Renato Marciano (Kartel)', little: "K #50 - Khoi Nguyen (Kutthroat)" },
      { number: 37, name: 'Daniel Kinjo', brotherName: 'Trilogy', big: 'Z #29 - Camilo Moya (D-Slang)', little: 'K #49 - Tim Garcia (Skyfall)' },
      { number: 38, name: 'Vinson Cao', brotherName: 'Volatile', big: 'Z #30 - Scotty Patria (Justified)', little: 'Λ #54 - Juan Chau (UPROAR)' },
      { number: 39, name: 'Liam Egan', brotherName: 'LockOUT', big: 'Z #28 - John Sia (Facebook)', little: 'I #45 - Michael Miglio (Antidote)' },
      { number: 40, name: 'Jean-Paul Parenteau', brotherName: 'O-ZONE', big: 'B #11 - Richard Barrido (Bloodlust)' },
      { number: 41, name: 'Alexander Parker', brotherName: 'Ascension', big: 'E #27 - Christian Alvarez (Bahamut)', little: 'K #48 - Nic Dale (Cardinal)' },
    ],
  },
  Iota: {
    classPicture: '/iotas.jpg',
    members: [
      { number: 42, name: 'Uriel Garcia', brotherName: 'Fuego', big: 'Δ #20 - Luis Lozano (Falsetto)', little: 'Φ #110 - Kwabena Casimir (Galand)' },
      { number: 43, name: 'Taro Miyabayashi', brotherName: 'Manifest', big: 'H #34 - Tim Roberts (Brigade)' },
      { number: 44, name: 'Andy Mai', brotherName: 'Cutlass', big: 'Δ #22 - Kishan Fichadiya (EMBLEM)', little: 'Λ #57 - Jimmy Nguyen (Minotaur)' },
      { number: 45, name: 'Michael Miglio', brotherName: 'Antidote' },
      { number: 46, name: 'Jason Reyes', brotherName: 'EXECUTIONER', big: 'Δ #22 - Kishan Fichadiya (EMBLEM)', little: 'Λ #56 - The Phung (WARLOCK)' },
      { number: 47, name: 'Albert Reyes', brotherName: 'Asylum', big: 'H #31 - Bob James Cal (illest)', little: 'Λ #55 - Quan Nguyen (Seeker) & M #66 - Quy Van (DEADLIFT) ' },
    ],
  },
  Kappa: {
    classPicture: '/kappas.JPG',
    members: [
      { number: 48, name: 'Nic Dale', brotherName: 'Cardinal', big: 'Θ #41 - Alexander Parker (Ascension)', little: 'N #73 - Christian Oosthuizen (Cashout)' },
      { number: 49, name: 'Tim Garcia', brotherName: 'Skyfall', big: 'Θ #37 - Daniel Kinjo (Trilogy)', little: 'M #61 - Andy Le (Hardstyle)' },
      { number: 50, name: 'Khoi Nguyen', brotherName: 'Kutthroat', big: 'Θ #36 - Jimee Truong (Krimson)', little: 'M #65 - Son Nguyen (Kritical) & N #69 - Daniel Phan (Klassic)' },
      { number: 51, name: 'Casper Yen', brotherName: 'KING TUT', big: 'Θ #35 - Khai Ho (yukMOUTH)', little: 'M #62 - Bryan San Antonio (SCARAB)' },
      { number: 52, name: 'Thomas Nguyen', brotherName: 'R.A.Y.Q.U.A.Z.A.', big: 'H #33 - Vinh Nguyen (A.B.S.I.N.T.H.E.)', little: 'N #70 - Tan Tran (R.A.I.K.O.U)' },
      { number: 53, name: 'Richard Han', brotherName: 'The Decision', big: 'A #3 - Jonathan Barlaan (Impound)', little: 'M #64 - Scott Wu (The Equalizer)' },
    ],
  },
  Lambda: {
    classPicture: '/lambdas.JPG',
    members: [
      { number: 54, name: 'Juan Chau', brotherName: 'UPROAR', big: 'Θ #38 - Vinson Cao (Volatile)', little: 'P #81 - Calvin Nguyen (HYPERBEAST)' },
      { number: 55, name: 'Quan Nguyen', brotherName: 'Seeker', big: 'I #47 - Albert Reyes (Asylum)', little: 'N #71 - Quan Huynh (Global)' },
      { number: 56, name: 'The Phung', brotherName: 'WARLOCK', big: 'I #46 - Jason Reyes (EXECUTIONER)', little: 'M #63 - Devin Tran (KNIVES)' },
      { number: 57, name: 'Jimmy Nguyen', brotherName: 'Minotaur', big: 'I #44 - Andy Mai (Cutlass)', little: 'O #75 - Judsy Cabatana (Deuterium)' },
      { number: 58, name: 'Dat Pham', brotherName: 'Death Adder', big: 'H #31 - Bob James Cal (illest)', little: 'M #67 - Ju’Von Nathan (Bankai)' },
      { number: 59, name: 'Brandom Pham', brotherName: 'Tartarus', big: 'H #32 - Joey Frye (Jetpack)', little: 'M #68 - Kevin Tran (Kronos)' },
    ],
  },
  Mu: {
    classPicture: '/mus.jpg',
    members: [
      { number: 61, name: 'Andy Le', brotherName: 'Hardstyle', big: 'K #49 - Tim Garcia (Skyfall)', little: 'O #79 - Kenny Nguyen (illicit)' },
      { number: 62, name: 'Bryan San Antonio', brotherName: 'SCARAB', big: 'K #51 - Casper Yen (KING TUT)', little: 'P #82 - Joshua Abrahan (HORUS) & P #85 Vladimir Shpilchevskiy (LUXOR)' },
      { number: 63, name: 'Devin Tran', brotherName: 'KNIVES', big: 'Λ #56 - The Phung (WARLOCK)', little: 'P #84 - Brandon Lim (CLASS WAR)' },
      { number: 64, name: 'Scott Wu', brotherName: 'The Equalizer', big: 'K #53 - Richard Han (The Decision)', little: 'Σ #87 - Thomas Dang (GUNMETAL)' },
      { number: 65, name: 'Son Nguyen', brotherName: 'Kritical', big: 'K #50 - Khoi Nguyen (Kutthroat)' },
      { number: 66, name: 'Quy Van', brotherName: 'DEADLIFT', big: 'I #47 - Albert Reyes (Asylum)', little: 'O #78 - Tai Hailè (SHENRON)' },
      { number: 67, name: 'Ju’Von Nathan', brotherName: 'Bankai', big: 'Λ #58 - Dat Pham (Death Adder)', little: 'Σ #93 - Giovanni Ragusa (GILGAMESH)' },
      { number: 68, name: 'Kevin Tran', brotherName: 'Kronos', big: 'Λ #59 - Brandom Pham (Tartarus)', little: 'N #72 - David Dang (TENSEIGA)' },
    ],
  },
  Nu: {
    classPicture: '/nus.jpg',
    members: [
      { number: 69, name: 'Daniel Phan', brotherName: 'Klassic', big: 'K #50 - Khoi Nguyen (Kutthroat)', little: 'O #80 - Randy Tran (Kloud 9)' },
      { number: 70, name: 'Tan Tran', brotherName: 'R.A.I.K.O.U.', big: 'K #52 - Thomas Nguyen (R.A.Y.Q.U.A.Z.A.)', little: 'Σ #91 - Thomas Lam (G.O.D.L.I.K.E.)' },
      { number: 71, name: 'Quan Huynh', brotherName: 'Global', big: 'Λ #55 - Quan Nguyen (Seeker)', little: 'T #96 - Khuong Mai (Excursion)' },
      { number: 72, name: 'David Dang', brotherName: 'TENSEIGA', big: 'N #68 - Kevin Tran (Kronos)', little: 'O #74 - Jordan Reyes (DEATH KNIGHT) & O #77 - Minh Nguyen (KILL SWITCH)' },
      { number: 73, name: 'Christian Oosthuizen', brotherName: 'Cashout', big: 'K #48 - Nic Dale (Cardinal)', little: 'O #76 - Michael Nguyen (Arachnid)' },
    ],
  },
  Omicron: {
    classPicture: '/omicrons.jpeg',
    members: [
      { number: 74, name: 'Jordan Reyes', brotherName: 'DEATH KNIGHT', big: 'N #72 - David Dang (TENSEIGA)', little: 'Σ #90 - James Wang (ENDGAME)' },
      { number: 75, name: 'Judsy Cabatana', brotherName: 'Deuterium', big: 'Λ #57 - Jimmy Nguyen (Minotaur)', little: 'Y #100 - Derick Vo (Infinitium)' },
      { number: 76, name: 'Michael Nguyen', brotherName: 'Arachnid', big: 'N #73 - Christian Oosthuizen (Cashout)', little: 'Σ #88 - Kevin Ly (Aurelius)' },
      { number: 77, name: 'Minh Nguyen', brotherName: 'KILL SWITCH', big: 'N #72 - David Dang (TENSEIGA)', little: 'P #86 - Jarrod Van Loon (LETHAL)' },
      { number: 78, name: 'Tai Hailè', brotherName: 'SHENRON', big: 'M #66 - Quy Van (DEADLIFT)', little: 'T #95 - Brandon Le (SHOGANAI) & Y #99 Luan Phan (SHINSEIDO)' },
      { number: 79, name: 'Kenny Nguyen', brotherName: 'illicit', big: 'M #61 - Andy Le (Hardstyle)', little: 'Σ #92 - Harrison Do (Prophecy)' },
      { number: 80, name: 'Randy Tran', brotherName: 'Kloud 9', big: 'N #69 - Daniel Phan (Klassic)', little: 'P #83 - Sean DiPietro (Kovert) & T #97 - Son Cao (Krucible)' },

    ],
  },
  Rho: {
    classPicture: '/rhos_desired.jpg',
    members: [
      { number: 81, name: 'Calvin Nguyen', brotherName: 'HYPERBEAST', big: 'Λ #54 - Juan Chau (UPROAR)', little: 'Y #101 - Dat Huynh (UNDISPUTED)' },
      { number: 82, name: 'Joshua Abrahan', brotherName: 'HORUS', big: 'M #62 - Bryan San Antonio (SCARAB)', little: 'Σ #89 - Dominic Gamonez (SOBEK) & AΓ #137 - Dillon Berger (KHEPERA)' },
      { number: 83, name: 'Sean DiPietro', brotherName: 'Kovert', big: 'O #80 - Randy Tran (Kloud 9)', little: 'AA #125 - Bill Tran (Kanon) & UNF Associate Chapter A #2 - Leland Roxas Caro (Campeón)' },
      { number: 84, name: 'Brandon Lim', brotherName: 'CLASS WAR', big: 'M #63 - Devin Tran (KNIVES)', little: 'T #94 - Albert Cala (CONQUEROR) & AΓ #136 - Tuan Kiet (Mike) Phan' },
      { number: 85, name: 'Vladimir Shpilchevskiy', brotherName: 'LUXOR', big: 'M - #62 Bryan San Antonio (SCARAB)', little: 'Y #104 - Tommy Tai Tran (NAUCRATIS)' },
      { number: 86, name: 'Jarrod Van Loon', brotherName: 'LETHAL', big: 'O #77 - Minh Nguyen (KILL SWITCH)' },
    ],
  },
  Sigma: {
    classPicture: '/sigmas.JPG',
    members: [
      { number: 87, name: 'Thomas Dang', brotherName: 'GUNMETAL', big: 'M #64 - Scott Wu (The Equalizer)', little: 'Ω #123 - Kevin Pham (HELLBENT)' },
      { number: 88, name: 'Kevin Ly', brotherName: 'Aurelius', big: 'O #76 - Michael Nguyen (Arachnid)', little: 'Φ #107 - Tee Chulikavit (Archimedes)' },
      { number: 89, name: 'Dominic Gamonez', brotherName: 'SOBEK', big: 'P #82 - Joshua Abrahan (HORUS)', little: 'Y #105 - Sean Williams (KHONSU)' },
      { number: 90, name: 'James Wang', brotherName: 'ENDGAME', big: 'O #74 - Jordan Reyes (DEATH KNIGHT)', little: 'Φ #109 - Alvin Ly (RESET) & Ω #120 - Edison Lin (DNR)' },
      { number: 91, name: 'Thomas Lam', brotherName: 'G.O.D.L.I.K.E.', big: 'N #70 - Tan Tran (R.A.I.K.O.U.)', little: 'Φ #106 - Andrew Nguyen (R.E.S.U.R.R.E.C.T.I.O.N.)' },
      { number: 92, name: 'Harrison Do', brotherName: 'Prophecy', big: 'O #79 - Kenny Nguyen (illicit)', little: 'Ψ #116 - Thomas Pham (Playmaker)' },
      { number: 93, name: 'Giovanni Ragusa', brotherName: 'GILGAMESH', big: 'M #67 - Ju’Von Nathan (Bankai)', little: 'Y #102 - Eduardo Chong (NORAGAMI)' },
    ],
  },
  Tau: {
    classPicture: '/taus.JPG',
    members: [
      { number: 94, name: 'Albert Cala', brotherName: 'CONQUEROR', big: 'P #84 - Brandon Lim (CLASS WAR)', little: 'Ψ #114 - Jonah Mazzone (SLAYER)' },
      { number: 95, name: 'Brandon Le', brotherName: 'SHOGANAI', big: 'O #78 - Tai Hailè (SHENRON)', little: 'Ω #122 - Moses Phan (SHROUD)' },
      { number: 96, name: 'Khuong Mai', brotherName: 'Excursion', big: 'N #71 - Quan Huynh (Global)', little: 'AB #127 - Andrew Chau (Godspeed)' },
      { number: 97, name: 'Son Cao', brotherName: 'Krucible', big: 'O #80 - Randy Tran (Kloud 9)', little: 'Φ #108 - Anthony Nguyen (Kalamity) & AA #124 - Benjamin Nguyen (Kartier)' },
    ],
  },
  Upsilon: {
    classPicture: '/upsilons.jpg',
    members: [
      { number: 99, name: 'Luan Phan', brotherName: 'SHINSEIDO', big: 'O #78 - Tai Hailè (SHENRON)', little: 'X #113 - Minh-Kha Vu (CAPTIVATE) & Ω #119 - Vanny Ho (LEGEND)' },
      { number: 100, name: 'Derick Vo', brotherName: 'Infinitum', big: 'O #75 - Judsy Cabatana (Deuterium)', little: 'Ψ #117 - Harvey Dang (Valorum)' },
      { number: 101, name: 'Dat Huynh', brotherName: 'UNDISPUTED', big: 'P #81 - Calvin Nguyen (HYPERBEAST)', little: 'AA #126 - Brian Jiang (BLOODBATH)' },
      { number: 102, name: 'Eduardo Chong', brotherName: 'NORAGAMI', big: 'Σ #93 - Giovanni Ragusa (GILGAMESH)' },
      { number: 104, name: 'Tommy Tai Tran', brotherName: 'NAUCRATIS', big: 'P #85 Vladimir Shpilchevskiy (LUXOR)', little: 'X #111 - Kevin Dau (CARTHAGE), X #112 - Frank Guzman (BABYLON), UNF Associate Chapter B #5 - Brandon Dinh (OASIS) & UNF Associate Chapter B #6 - Kush Patel (UTOPIA)' },
      { number: 105, name: 'Sean Williams', brotherName: 'KHONSU', big: 'Σ #89 Dominic Gamonez (SOBEK)', little: 'ΑΓ #133 - Harrison Hong (DEIMOS)' },
    ],
  },
  Phi: {
    classPicture: '/phis.jpg',
    members: [
      { number: 106, name: 'Andrew Nguyen', brotherName: 'R.E.S.U.R.R.E.C.T.I.O.N.', big: 'Σ #91 - Thomas Lam (G.O.D.L.I.K.E.)', little: 'AΔ #140 - Chandee De Jesus (P.U.R.G.A.T.O.R.Y.)' },
      { number: 107, name: 'Tee Chulikavit', brotherName: 'Archimedes', big: 'Σ #88 - Kevin Ly (Aurelius)' },
      { number: 108, name: 'Anthony Nguyen', brotherName: 'Kalamity', big: 'T #97 - Son Cao (Krucible)', little: 'ΑΓ #131 - Julian Legaspi (Kold-Blooded)' },
      { number: 109, name: 'Alvin Ly', brotherName: 'RESET', big: 'Σ #90 - James Wang (ENDGAME)' },
      { number: 110, name: 'Kwabena Casimir', brotherName: 'Galand', big: 'I #42 - Uriel Garcia (Fuego)', little: 'Ω #121 - Kervensky Anestil (Mogul)' },
    ],
  },
  Chi: {
    classPicture: '/chis.JPG',
    members: [
      { number: 111, name: 'Kevin Dau', brotherName: 'CARTHAGE', big: 'Y #104 - Tommy Tai Tran (NAUCRATIS)', little: 'Ψ #115 - Danny Truong (CALAIS)' },
      { number: 112, name: 'Frank Guzman', brotherName: 'BABYLON', big: 'Y #104 - Tommy Tai Tran (NAUCRATIS)', little: 'Ψ #118 - Christopher Pham (NOXUS)'  },
      { number: 113, name: 'Minh-Kha Vu', brotherName: 'CAPTIVATE', big: 'Y #99 - Luan Phan (SHINSEIDO)' },
    ],
  },
  Psi: {
    classPicture: '/psis.jpg',
    members: [
    { number: 114, name: 'Jonah Mazzone', brotherName: 'SLAYER', big: 'T #94 - Albert Cala (CONQUEROR)', little: 'ΑΓ #132 - Diego Adesso (INQUISITOR)' },
    { number: 115, name: 'Danny Truong', brotherName: 'CALAIS', big: 'X #111 - Kevin Dau (CARTHAGE)' },
    { number: 116, name: 'Thomas Pham', brotherName: 'Playmaker', big: 'Σ #92 - Harrison Do (Prophecy)' },
    { number: 117, name: 'Harvey Dang', brotherName: 'Valorum', big: 'Y #100 - Derick Vo (Infinitium)', little: 'AZ #146 - Michael Nguyen (Driftking)' },
    { number: 118, name: 'Christopher Pham', brotherName: 'NOXUS', big: 'X #112 - Frank Guzman (BABYLON)', little: 'AB #128 - Nickolas Chan (KAMINO)' },
    ],
  },
  Omega:{ 
    classPicture: '/omegas.jpg',
    members: [
    { number: 119, name: 'Vanny Ho', brotherName: 'LEGEND', big: 'Y #99 - Luan Phan (SHINSEIDO)', little: 'AΔ #138 - Aaron Tran (FLASHBACK)' },
    { number: 120, name: 'Edison Lin', brotherName: 'DNR', big: 'Σ #90 - James Wang (ENDGAME)', little: 'ΑΓ #134 - Jeff Chen (LASTBREATH)' },
    { number: 121, name: 'Kervensky Anestil', brotherName: 'Mogul', big: 'Φ #110 - Kwabena Casimir (Galand)', little: 'AB #129 - Gabriel Rosales (Kothar)' },
    { number: 122, name: 'Moses Phan', brotherName: 'SHROUD', big: 'T #95 - Brandon Le (SHOGANAI)', little: 'AE #142 - Shawn Nguyen (SHADOWBORN)' },
    { number: 123, name: 'Kevin Pham', brotherName: 'HELLBENT', big: 'Σ #87 - Thomas Dang (GUNMETAL)', little: 'AB #130 - David Kim (FANATIC)' },
    ],
  },
  'Alpha Alpha': {
    classPicture: '/AAs_smile.JPG',
    members: [
      { number: 124, name: 'Benjamin Nguyen', brotherName: 'Kartier', big: 'T #97 - Son Cao (Krucible)', little: 'AE #141 - Brandon Nguyen (Kavalry)' },
      { number: 125, name: 'Bill Tran', brotherName: 'Kanon', big: 'P #83 - Sean DiPietro (Kovert)', little: 'AΔ #139 - Thomveebol Phorn (Kaliburn)' },
      { number: 126, name: 'Brian Jiang', brotherName: 'BLOODBATH', big: 'Y #101 - Dat Huynh (UNDISPUTED)', little: 'ΑΓ #135 - Andy Zheng (KENPACHI) & AZ #144 - Phu Tran (KIMURA)' },
    ],
  },
  'Alpha Beta': {
    classPicture: '/ABs.JPG',
    members: [
      { number: 127, name: 'Andrew Chau', brotherName: 'Godspeed', big: 'T #96 - Khuong Mai (Excursion)'  },
      { number: 128, name: 'Nickolas Chan', brotherName: 'KAMINO', big: 'Ψ #118 - Christopher Pham (NOXUS)' },
      { number: 129, name: 'Gabriel Rosales', brotherName: 'Kothar', big : 'Ω #121 - Kervensky Anestil (Mogul)', little: 'AE #143 - Muhamad Almasri (FRANCHISE)' },
      { number: 130, name: 'David Kim', brotherName: 'FANATIC', big: 'Ω #123 - Kevin Pham (HELLBENT)' },
    ],
  },
  'Alpha Gamma': {
    classPicture: '/AGs.jpeg',
    members: [
      { number: 131, name: 'Julian Legaspi', brotherName: 'Kold-Blooded', big: 'Φ #108 - Anthony Nguyen (Kalamity)' },
      { number: 132, name: 'Diego Adesso', brotherName: 'INQUISITOR', big: 'Ψ #114 - Jonah Mazzone (SLAYER)' },
      { number: 133, name: 'Harrison Hong', brotherName: 'DEIMOS', big: 'Y #105 - Sean Williams (KHONSU)' },
      { number: 134, name: 'Jeff Chen', brotherName: 'LASTBREATH', big: 'Ω #120 - Edison Lin (DNR)' },
      { number: 135, name: 'Andy Zheng', brotherName: 'KENPACHI', big: 'AA #126 - Brian Jiang' },
      { number: 136, name: 'Tuan Kiet (Mike) Phan', brotherName: 'CHOSEN ONE', big: 'P #84 - Brandon Lim (CLASS WAR)' },
      { number: 137, name: 'Dillon Berger', brotherName: 'KHEPERA', big: 'P #82 - Joshua Abrahan (HORUS)', little: 'AZ #145 - Matthew Lim (PERSES)' },
    ],
  },
  'Alpha Delta': {
    classPicture: '/ADs.png',
    members: [
      { number: 138, name: 'Aaron Tran', brotherName: 'FLASHBACK', big: 'Ω #119 - Vanny Ho (LEGEND)' },
      { number: 139, name: 'Thomveebol Phorn', brotherName: 'Kaliburn', big: 'AA #125 - Bill Tran (Kanon)' },
      { number: 140, name: 'Chandee De Jesus', brotherName: 'P.U.R.G.A.T.O.R.Y.', big: 'Φ #106 - Andrew Nguyen (R.E.S.U.R.R.E.C.T.I.O.N.)'},
    ],
  },
  'Alpha Epsilon': {
      classPicture: '/AEs.jpg',
      members: [
        { number: 141, name: 'Brandon Nguyen', brotherName: 'Kavalry', big: 'AA #124 - Benjamin Nguyen (Kartier)' },
        { number: 142, name: 'Shawn Nguyen', brotherName: 'SHADOWBORN', big: 'Ω #122 - Moses Phan (SHROUD)' },
        { number: 143, name: 'Muhamad Almasri', brotherName: 'FRANCHISE', big: 'AB #129 - Gabriel Rosales (Kothar)' },
      ],
    },
  'Alpha Zeta': {
      classPicture: '/AZs.jpg',
      members: [
        { number: 144, name: 'Phu Tran', brotherName: 'KIMURA', big: 'AA #126 - Brian Jiang (BLOODBATH)' },
        { number: 145, name: 'Matthew Lim', brotherName: 'PERSES', big: 'AΓ #137 - Dillon Berger (KHEPERA)' },
        { number: 146, name: 'Michael Nguyen', brotherName: 'Driftking', big: 'Ψ #117 - Harvey Dang (Valorum)' },
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
    { greek: 'AZ', english: 'Alpha Zeta' },
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
    'Alpha Zeta': 'Spring 2025',
  };
  
  const getGreekLabel = (index) => {
    return greekAlphabet[index].greek;
  };
  
  const getEnglishLabel = (index) => {
    return greekAlphabet[index].english;
  };
  const BrotherInfo = ({ className, person, isMobile }) => {
  const [showRelations, setShowRelations] = useState(false);

  const handleClick = () => {
    if (isMobile) setShowRelations(!showRelations);
  };

  const handleMouseEnter = () => {
    if (!isMobile) setShowRelations(true);
  };

  const handleMouseLeave = () => {
    if (!isMobile) setShowRelations(false);
  };


  // Build relation string based on presence
  const relations = [];
  if (person.big) relations.push(`Big: ${person.big}`);
  if (person.little) relations.push(`Little: ${person.little}`);
  const relationsText = relations.join('; ');

  return (
    <div
      className="text-lg cursor-pointer"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="text-white font-Rijusans">
        {className} #{person.number} - {person.name}{' '}
      </span>
      <span className="text-red-500 font-RijusansItalic font-bold">
        ({person.brotherName})
      </span>
      {showRelations && (
        <div className="mt-1">
          {person.big && (
            <div className="text-gray-400 text-sm font-Rijusans">
              Big: {person.big}
            </div>
          )}
          {person.little && (
            <div className="text-gray-400 text-sm font-Rijusans">
              Little: {person.little}
            </div>
          )}
        </div>
      )}
    </div>
  );
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
                      <BrotherInfo
                        className={modalContent.className}
                        person={person}
                        isMobile={window.innerWidth < 768}
                      />
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
