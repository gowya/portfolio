import type { Metadata } from 'next'
import PricingView from '@/components/pricing/PricingView'

export const metadata: Metadata = {
  title: 'Tarifs',
  description:
    'Diagnostic, designer embarquée ou partenaire : les offres de Margaux Francillard, Product Designer qui livre vos parcours clés directement dans votre code, pour les produits qui ont des clients mais pas encore de designer.',
  alternates: { canonical: '/pricing' },
}

export default function PricingPage() {
  return <PricingView />
}
