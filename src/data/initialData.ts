import type { CollectionItem } from '../types'

function mk(
  id: string,
  type: CollectionItem['type'],
  name: string,
  faction: string,
  source: string,
  status: CollectionItem['status'] = 'todo',
  notes = ''
): CollectionItem {
  return { id, type, name, faction, source, status, notes, tutorial: '', paints: '' }
}

export const INITIAL_DATA: CollectionItem[] = [
  // ── VITRINE — peints ──────────────────────────────────────────────
  mk('sc01','miniature','Personnage monté Stormcast','Stormcast Eternals','Vitrine','done','Peint, exposé en vitrine'),
  mk('sc02','miniature','Lord-Celestant (version 1)','Stormcast Eternals','Vitrine','done'),
  mk('sc03','miniature','Lord-Celestant Sigmar','Stormcast Eternals','Vitrine','done'),
  mk('sc04','miniature','Figurine Sacrosanct mage','Stormcast Eternals','Vitrine','done'),
  mk('sc05','miniature','Balliste Stormcast','Stormcast Eternals','Vitrine','done'),
  mk('sc06','miniature','Servant balliste 1','Stormcast Eternals','Vitrine','done'),
  mk('sc07','miniature','Servant balliste 2','Stormcast Eternals','Vitrine','done'),
  mk('sc08','miniature','Knight-Questor (version 1)','Stormcast Eternals','Vitrine','done'),
  mk('sc09','miniature','Guerrière bouclier & lance','Stormcast Eternals','Vitrine','done'),
  mk('sc10','miniature','Praetor (version 1)','Stormcast Eternals','Vitrine','done'),
  mk('sc11','miniature','Guerrier lance rouge','Stormcast Eternals','Vitrine','done'),
  mk('sc12','miniature','Porteur d\'étendard','Stormcast Eternals','Vitrine','done'),
  mk('sc13','miniature','Guerrière épée','Stormcast Eternals','Vitrine','done'),
  mk('sc15','miniature','Knight-Questor (version 2)','Stormcast Eternals','Vitrine','done'),
  mk('sc16','miniature','Stormcast avec loup 1','Stormcast Eternals','Vitrine','done'),
  mk('sc17','miniature','Stormcast avec loup 2','Stormcast Eternals','Vitrine','done'),
  mk('std01','miniature','Personnage Chaos hache dorée','Slaves to Darkness','Vitrine','done'),

  // ── BLACKTALONS ───────────────────────────────────────────────────
  mk('bt01','miniature','Neave Blacktalon','Stormcast Eternals','Blacktalon: The Blacktalons','done'),
  mk('bt02','miniature','Hendrick','Stormcast Eternals','Blacktalon: The Blacktalons','done'),
  mk('bt03','miniature','Rostus','Stormcast Eternals','Blacktalon: The Blacktalons','done'),
  mk('bt04','miniature','Shakana','Stormcast Eternals','Blacktalon: The Blacktalons','done'),
  mk('bt05','miniature','Lorai, Child of the Abyss','Stormcast Eternals','Blacktalon: The Blacktalons','wip','Montée, non peinte'),

  // ── ASSEMBLÉS non peints ──────────────────────────────────────────
  mk('sc18','miniature','Figurine ailée grand personnage','Stormcast Eternals','Vitrine','wip','Assemblée, non peinte'),
  mk('sc19','miniature','Figurine mage Stormcast','Stormcast Eternals','Vitrine','wip','Assemblée, non peinte'),
  mk('std02','miniature','Figurine Viking cornu','Slaves to Darkness','Boite individuelle','wip','Assemblée'),

  // ── SPEARHEAD: GRUNDSTOK TRAILBLAZERS ────────────────────────────
  mk('kh01','miniature','Endrinmaster with Dirigible Suit','Kharadron Overlords','Spearhead: Grundstok Trailblazers','wip','En cours de peinture'),
  mk('kh02','miniature','Grundstok Thunderer 1','Kharadron Overlords','Spearhead: Grundstok Trailblazers'),
  mk('kh03','miniature','Grundstok Thunderer 2','Kharadron Overlords','Spearhead: Grundstok Trailblazers'),
  mk('kh04','miniature','Grundstok Thunderer 3','Kharadron Overlords','Spearhead: Grundstok Trailblazers'),
  mk('kh05','miniature','Grundstok Thunderer 4','Kharadron Overlords','Spearhead: Grundstok Trailblazers'),
  mk('kh06','miniature','Grundstok Gunhauler','Kharadron Overlords','Spearhead: Grundstok Trailblazers'),
  mk('kh07','miniature','Endrinrigger 1','Kharadron Overlords','Spearhead: Grundstok Trailblazers'),
  mk('kh08','miniature','Endrinrigger 2','Kharadron Overlords','Spearhead: Grundstok Trailblazers'),

  // ── SPEARHEAD: HELFORGE HOST ──────────────────────────────────────
  mk('hh01','miniature','War Despot','Helsmiths of Hashut','Spearhead: Helforge Host'),
  mk('hh02','miniature','Dominator Engine with Immolation Cannons','Helsmiths of Hashut','Spearhead: Helforge Host'),
  mk('hh03','miniature','Tormentor Bombard','Helsmiths of Hashut','Spearhead: Helforge Host'),
  mk('hh04','miniature','Infernal Cohort 1','Helsmiths of Hashut','Spearhead: Helforge Host'),
  mk('hh05','miniature','Infernal Cohort 2','Helsmiths of Hashut','Spearhead: Helforge Host'),
  mk('hh06','miniature','Infernal Cohort 3','Helsmiths of Hashut','Spearhead: Helforge Host'),
  mk('hh07','miniature','Infernal Cohort 4','Helsmiths of Hashut','Spearhead: Helforge Host'),
  mk('hh08','miniature','Infernal Cohort 5','Helsmiths of Hashut','Spearhead: Helforge Host'),
  mk('hh09','miniature','Infernal Cohort 6','Helsmiths of Hashut','Spearhead: Helforge Host'),
  mk('hh10','miniature','Infernal Cohort 7','Helsmiths of Hashut','Spearhead: Helforge Host'),

  // ── CITIES OF SIGMAR ──────────────────────────────────────────────
  mk('cos01','miniature','Pontifex Zenestra, Matriarch of the Great Wheel','Cities of Sigmar','Boite individuelle','todo','Sous blister'),
  mk('cos02','miniature','Mascot Gargoylian','Cities of Sigmar','Freeguild Command Corps'),
  mk('cos03','miniature','Arch-Knight','Cities of Sigmar','Freeguild Command Corps'),
  mk('cos04','miniature','Great Herald','Cities of Sigmar','Freeguild Command Corps'),
  mk('cos05','miniature','Soul Shepherd','Cities of Sigmar','Freeguild Command Corps'),
  mk('cos06','miniature','Whisperblade','Cities of Sigmar','Freeguild Command Corps'),
  mk('cos07','miniature','War Surgeon','Cities of Sigmar','Freeguild Command Corps'),
  mk('cos08','miniature','Marshal Ashfield','Cities of Sigmar','Marshal Ashfield & Squire Udo (Commemorative)'),
  mk('cos09','miniature','Squire Udo','Cities of Sigmar','Marshal Ashfield & Squire Udo (Commemorative)'),
  mk('cos10','miniature','Galen','Cities of Sigmar','Galen & Doralia: Outnumbered (Commemorative)'),
  mk('cos11','miniature','Doralia','Cities of Sigmar','Galen & Doralia: Outnumbered (Commemorative)'),
  mk('cos12','miniature','Luminark of Hysh','Cities of Sigmar','Boite individuelle'),

  // ── SOULBLIGHT GRAVELORDS — RACLEMORTS ───────────────────────────
  mk('sg01','miniature','Roi Revenant sur Coursier Squelette','Soulblight Gravelords','Raclemorts — Set d\'armée'),
  mk('sg02','miniature','Chevalier des Terres 1','Soulblight Gravelords','Raclemorts — Set d\'armée'),
  mk('sg03','miniature','Chevalier des Terres 2','Soulblight Gravelords','Raclemorts — Set d\'armée'),
  mk('sg04','miniature','Chevalier des Terres 3','Soulblight Gravelords','Raclemorts — Set d\'armée'),
  mk('sg05','miniature','Chevalier des Terres 4','Soulblight Gravelords','Raclemorts — Set d\'armée'),
  mk('sg06','miniature','Chevalier des Terres 5','Soulblight Gravelords','Raclemorts — Set d\'armée'),
  ...Array.from({length:20},(_,i)=>mk(`sg${7+i}`,'miniature',`Garde des Terres ${i+1}`,'Soulblight Gravelords',"Raclemorts — Set d'armée")),
  mk('sg27','miniature','Karlina von Carstein','Soulblight Gravelords','Commemorative Series'),

  // ── SLAVES TO DARKNESS ───────────────────────────────────────────
  mk('std03','miniature','Tzarketh, Bane of Law','Slaves to Darkness','Commemorative Series'),

  // ── SKAVEN ───────────────────────────────────────────────────────
  mk('sk01','miniature','Arch-Warlock','Skaven','Boite individuelle'),
  mk('sk02','miniature','Doom-Flayer 1','Skaven','Skaven: Doom-Flayers'),
  mk('sk03','miniature','Doom-Flayer 2','Skaven','Skaven: Doom-Flayers'),
  mk('sk04','miniature','Izzik Skour, Prophet of the Horned Rat','Skaven','Boite individuelle'),

  // ── RAZ-DE-SKAVENS — Stormcast ────────────────────────────────────
  mk('rz01','miniature','Seigneur-Vigilant sur Gryph-rôdeur','Stormcast Eternals','Raz-de-Skavens'),
  mk('rz02','miniature','Seigneur-Terminos avec Mémorion','Stormcast Eternals','Raz-de-Skavens'),
  mk('rz03','miniature','Seigneur-Véritant avec Gryph-corbeau','Stormcast Eternals','Raz-de-Skavens'),
  mk('rz04','miniature','Chevalier-Questor','Stormcast Eternals','Raz-de-Skavens'),
  mk('rz05','miniature','Réclusien 1','Stormcast Eternals','Raz-de-Skavens'),
  mk('rz06','miniature','Réclusien 2','Stormcast Eternals','Raz-de-Skavens'),
  mk('rz07','miniature','Réclusien 3','Stormcast Eternals','Raz-de-Skavens'),
  mk('rz08','miniature','Mémorion 1','Stormcast Eternals','Raz-de-Skavens'),
  mk('rz09','miniature','Mémorion 2','Stormcast Eternals','Raz-de-Skavens'),
  mk('rz10','miniature','Prosecutor 1','Stormcast Eternals','Raz-de-Skavens'),
  mk('rz11','miniature','Prosecutor 2','Stormcast Eternals','Raz-de-Skavens'),
  mk('rz12','miniature','Prosecutor 3','Stormcast Eternals','Raz-de-Skavens'),
  ...Array.from({length:10},(_,i)=>mk(`rz${13+i}`,'miniature',`Libérateur ${i+1}`,'Stormcast Eternals','Raz-de-Skavens')),
  // Raz-de-Skavens — Skaven
  mk('rz23','miniature','Griffarque sur Ronge-bête','Skaven','Raz-de-Skavens'),
  mk('rz24','miniature','Prophète Gris','Skaven','Raz-de-Skavens'),
  mk('rz25','miniature','Ingénieur Technomage','Skaven','Raz-de-Skavens'),
  mk('rz26','miniature','Maléclateur Ratling','Skaven','Raz-de-Skavens'),
  mk('rz27','miniature','Rat-ogor 1','Skaven','Raz-de-Skavens'),
  mk('rz28','miniature','Rat-ogor 2','Skaven','Raz-de-Skavens'),
  mk('rz29','miniature','Rat-ogor 3','Skaven','Raz-de-Skavens'),
  mk('rz30','miniature','Jezzail à Malepierre 1','Skaven','Raz-de-Skavens'),
  mk('rz31','miniature','Jezzail à Malepierre 2','Skaven','Raz-de-Skavens'),
  mk('rz32','miniature','Jezzail à Malepierre 3','Skaven','Raz-de-Skavens'),
  ...Array.from({length:40},(_,i)=>mk(`rz${33+i}`,'miniature',`Rat des Clans ${i+1}`,'Skaven','Raz-de-Skavens')),

  // ── IDONETH DEEPKIN — Vanguard ────────────────────────────────────
  mk('id01','miniature','Akhelian Allopex','Idoneth Deepkin','Vanguard: Idoneth Deepkin'),
  mk('id02','miniature','Isharann Soulscryer','Idoneth Deepkin','Vanguard: Idoneth Deepkin'),
  mk('id03','miniature','Akhelian Morrsarr Guard 1','Idoneth Deepkin','Vanguard: Idoneth Deepkin'),
  mk('id04','miniature','Akhelian Morrsarr Guard 2','Idoneth Deepkin','Vanguard: Idoneth Deepkin'),
  mk('id05','miniature','Akhelian Morrsarr Guard 3','Idoneth Deepkin','Vanguard: Idoneth Deepkin'),
  ...Array.from({length:10},(_,i)=>mk(`id${6+i}`,'miniature',`Namarti Thrall ${i+1}`,'Idoneth Deepkin','Vanguard: Idoneth Deepkin')),

  // ── SET D'INITIATION GUERRIER ─────────────────────────────────────
  mk('gw01','miniature','Chevalier-Arcanum','Stormcast Eternals',"Set d'initiation Guerrier"),
  ...Array.from({length:5},(_,i)=>mk(`gw${2+i}`,'miniature',`Vindictor ${i+1}`,'Stormcast Eternals',"Set d'initiation Guerrier")),
  mk('gw07','miniature','Bosskitu avec Grot Surineur','Kruleboyz',"Set d'initiation Guerrier"),
  ...Array.from({length:10},(_,i)=>mk(`gw${8+i}`,'miniature',`Éventreur ${i+1}`,'Kruleboyz',"Set d'initiation Guerrier")),

  // ── STORMCAST — boites individuelles ─────────────────────────────
  mk('sc20','miniature','Knight-Relictor','Stormcast Eternals','Boite individuelle'),
  mk('sc21','miniature','Ionus Cryptborn, Warden of Lost Souls','Stormcast Eternals','Boite individuelle'),
  mk('sc22','miniature','Lord-Terminos','Stormcast Eternals','Lord-Terminos (boite)'),
  mk('sc23','miniature','Mémorion (Lord-Terminos)','Stormcast Eternals','Lord-Terminos (boite)'),
  mk('sc24','miniature','Krondys, Son of Dracothion','Stormcast Eternals','Boite individuelle'),
  mk('sc25','miniature','Iridan the Witness','Stormcast Eternals','Boite individuelle'),
  mk('sc26','miniature','Tornus the Redeemed','Stormcast Eternals','Boite individuelle'),

  // ── CASTIGATORS ───────────────────────────────────────────────────
  mk('sc27','miniature','Castigator 1','Stormcast Eternals','Castigators with Gryph-Hound'),
  mk('sc28','miniature','Castigator 2','Stormcast Eternals','Castigators with Gryph-Hound'),
  mk('sc29','miniature','Castigator 3','Stormcast Eternals','Castigators with Gryph-Hound'),
  mk('sc30','miniature','Gryph-Hound (Castigators)','Stormcast Eternals','Castigators with Gryph-Hound'),

  // ── GRYPH-HOUNDS ──────────────────────────────────────────────────
  ...Array.from({length:6},(_,i)=>mk(`sc${31+i}`,'miniature',`Gryph-Hound ${i+1}`,'Stormcast Eternals','Gryph-Hounds (boite)')),

  // ── VIGILORS ──────────────────────────────────────────────────────
  ...Array.from({length:10},(_,i)=>mk(`sc${37+i}`,'miniature',`Vigilors ${i+1}`,'Stormcast Eternals','Vigilors (boite)')),

  // ── PALADINS ──────────────────────────────────────────────────────
  ...Array.from({length:5},(_,i)=>mk(`sc${47+i}`,'miniature',`Paladin ${i+1}`,'Stormcast Eternals','Paladins (boite)')),

  // ── SEQUITORS ─────────────────────────────────────────────────────
  ...Array.from({length:10},(_,i)=>mk(`sc${52+i}`,'miniature',`Sequitor ${i+1}`,'Stormcast Eternals','Sequitors (boite)')),

  // ── EVOCATORS ON CELESTIAL DRACOLINES ────────────────────────────
  ...Array.from({length:3},(_,i)=>mk(`sc${62+i}`,'miniature',`Evocator on Celestial Dracoline ${i+1}`,'Stormcast Eternals','Evocators on Celestial Dracolines')),

  // ── KNIGHT-JUDICATOR ─────────────────────────────────────────────
  mk('sc65','miniature','Knight-Judicator','Stormcast Eternals','Knight-Judicator with Gryph-Hounds'),
  mk('sc66','miniature','Gryph-Hound A (Knight-Judicator)','Stormcast Eternals','Knight-Judicator with Gryph-Hounds'),
  mk('sc67','miniature','Gryph-Hound B (Knight-Judicator)','Stormcast Eternals','Knight-Judicator with Gryph-Hounds'),

  // ── XANDIRE'S TRUTHSEEKERS ────────────────────────────────────────
  mk('sc68','miniature','Xandire','Stormcast Eternals',"Xandire's Truthseekers",'todo','Underworlds warband'),
  mk('sc69','miniature','Truthseeker 1','Stormcast Eternals',"Xandire's Truthseekers"),
  mk('sc70','miniature','Truthseeker 2','Stormcast Eternals',"Xandire's Truthseekers"),
  mk('sc71','miniature','Truthseeker 3','Stormcast Eternals',"Xandire's Truthseekers"),

  // ── MAGAZINES STORMBRINGER ────────────────────────────────────────
  mk('mg01','miniature','Vindictor-Prime','Stormcast Eternals','Stormbringer n°1'),
  mk('mg02','miniature','Gutrippaz Boss','Kruleboyz','Stormbringer n°1'),
  mk('mg03','miniature','Gutrippaz','Kruleboyz','Stormbringer n°1'),
  mk('mg04','miniature','Praetor-Primus','Stormcast Eternals','Stormbringer n°5','todo','Exclusivité magazine'),
  mk('mg05','miniature','Beast-Skewer Killbow','Kruleboyz','Stormbringer n°11'),
  mk('mg06','miniature','Stormstrike Chariot','Stormcast Eternals','Stormbringer n°12'),
  mk('mg07','miniature','Mannok da Kunnin\'','Kruleboyz',"Stormbringer n°18 — Da Kunnin' Krew"),
  mk('mg08','miniature','Torka Tuffskull','Kruleboyz',"Stormbringer n°18 — Da Kunnin' Krew"),
  mk('mg09','miniature','Gnarl','Kruleboyz',"Stormbringer n°18 — Da Kunnin' Krew"),
  mk('mg10','miniature','Skarl','Kruleboyz',"Stormbringer n°18 — Da Kunnin' Krew"),
  mk('mg11','miniature','Grot Slittaz 1','Kruleboyz',"Stormbringer n°18 — Da Kunnin' Krew"),
  mk('mg12','miniature','Grot Slittaz 2','Kruleboyz',"Stormbringer n°18 — Da Kunnin' Krew"),
  mk('mg13','miniature','Gardus Steel Soul','Stormcast Eternals','Stormbringer n°19'),
  mk('mg14','miniature','Lord-Aquilor','Stormcast Eternals','Stormbringer n°23'),
  mk('mg15','miniature','Arch-Revenant','Sylvaneth','Stormbringer n°35'),

  // ── LIVRES / BATTLETOMES ──────────────────────────────────────────
  mk('bk01','book','Battletome: Stormcast Eternals','Stormcast Eternals','','done'),
  mk('bk02','book','Battletome: Skaven','Skaven','','done'),
  mk('bk03','book','Battletome: Orruk Warclans','Orruk Warclans','','done'),
  mk('bk04','book','Battletome: Kharadron Overlords','Kharadron Overlords','','done'),
  mk('bk05','book','Chaos Battletome: Helsmiths of Hashut','Helsmiths of Hashut','','done'),
  mk('bk06','book','Tome de Bataille de l\'Ordre: Stormcast Eternals','Stormcast Eternals','','done'),
  mk('bk07','book','Tome de Bataille du Chaos: Slaves to Darkness','Slaves to Darkness','','done'),
  mk('bk08','book','Tome de Bataille de l\'Ordre: Idoneth Deepkin','Idoneth Deepkin','','done'),
  mk('bk09','book','Tome de Bataille Destruction: Gloomspite Gitz','Gloomspite Gitz','','done'),
  mk('bk10','book','Livre de Base AoS','Age of Sigmar','','done'),
]
