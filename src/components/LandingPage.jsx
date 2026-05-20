import { useMemo, useState } from 'react'
import braceletImage from '../assets/braclet.png'
import earringImage from '../assets/earring.jpg'
import geminiImage from '../assets/gemini-2.5-flash-image_תיצור_תמונה_של_התכשיט_שיתאים_לפרסום_של_חברת_-0.jpg'
import CollectionsSection from './CollectionsSection'
import ContactSection from './ContactSection'
import GallerySection from './GallerySection'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import Footer from './Footer'
import SiteHeader from './SiteHeader'
import TestimonialSection from './TestimonialSection'
import ValueStrip from './ValueStrip'

const WHATSAPP_OWNER_NUMBER = '972587414769'

function LandingPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    notes: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const collections = [
    {
      title: 'סט כלות זהב',
      description: 'שילוב על-זמני של שרשרת, עגילים וטבעת לרגעים שלא שוכחים.',
      price: 'החל מ-₪4,590',
    },
    {
      title: 'קו יומיומי Signature',
      description: 'שרשראות וטבעות עדינות שנשארות איתך לכל היום, כל יום.',
      price: 'החל מ-₪1,490',
    },
    {
      title: 'Statement Luxe',
      description: 'נוכחות חזקה עם גימור ידני זהב 18K ועיצוב גיאומטרי יוקרתי.',
      price: 'החל מ-₪6,790',
    },
  ]

  const gallery = useMemo(
    () => [
      {
        src: geminiImage,
        alt: 'תכשיטי זהב לאירוע',
      },
      {
        src: braceletImage,
        alt: 'צמיד זהב יוקרתי',
      },
      {
        src: earringImage,
        alt: 'עגיל זהב עדין',
      },
      {
        src: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=80',
        alt: 'טבעת זהב יוקרתית',
      },
    ],
    [braceletImage, earringImage, geminiImage],
  )

  const onInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const validateForm = () => {
    const nextErrors = {}

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      nextErrors.name = 'נא להזין שם מלא (לפחות 2 תווים).'
    }

    if (!/^\+?[0-9\s-]{9,15}$/.test(formData.phone.trim())) {
      nextErrors.phone = 'נא להזין מספר טלפון תקין.'
    }

    return nextErrors
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validateForm()

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      return
    }

    const name = formData.name.trim()
    const phone = formData.phone.trim()
    const notes = formData.notes.trim()

    const message = notes
      ? `היי דור קוראים לי ${name} אני מחפש/ת ${notes} לבן/ת הזוג\nהמספר שלי זה ${phone}`
      : `היי דור קוראים לי ${name} אני מחפש/ת תכשיט לבן/ת הזוג אשמח להתייעצות\nהמספר שלי זה ${phone}`

    const whatsappUrl = `https://wa.me/${WHATSAPP_OWNER_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    setIsSubmitted(true)
  }

  return (
    <div className="page-shell" dir="rtl" lang="he">
      <SiteHeader />
      <HeroSection />
      <AboutSection />
      <ValueStrip />
      <CollectionsSection collections={collections} />
      <GallerySection gallery={gallery} />
      <TestimonialSection />
      <ContactSection
        formData={formData}
        errors={errors}
        isSubmitted={isSubmitted}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
      />
      <Footer />
    </div>
  )
}

export default LandingPage
