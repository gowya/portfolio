// Display order of the case studies: the order of this array is the order on the site.
import type { LocalizedProject } from '../types'
import { vela } from './vela'
import { phoneVerif } from './phone-verif'
import { trialByCard } from './trial-by-card'
import { rsvpParty } from './rsvp-party'
import { parcoursUpgrade } from './parcours-upgrade'
import { csvImport } from './csv-import'
import { ajoutDeLia } from './ajout-de-lia'
import { campaignManager } from './campaign-manager'
import { designSystem } from './design-system'
import { saasRecrutement } from './saas-recrutement'

export const PROJECTS_ORDERED: LocalizedProject[] = [
  vela,
  phoneVerif,
  trialByCard,
  rsvpParty,
  parcoursUpgrade,
  csvImport,
  ajoutDeLia,
  campaignManager,
  designSystem,
  saasRecrutement,
]
