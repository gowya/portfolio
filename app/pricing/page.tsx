import type { Metadata } from 'next'
import PricingView from '@/components/pricing/PricingView'

export const metadata: Metadata = {
  title: 'Tarifs',
  description:
    'Diagnostic UX, designer à temps partiel ou partenaire produit : les offres de Margaux Francillard, Product Designer qui code, pour les produits qui ont des clients mais pas encore de designer.',
  alternates: { canonical: '/pricing' },
}

export default function PricingPage() {
  return <PricingView />
}
