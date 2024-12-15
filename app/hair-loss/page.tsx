import { Sidebar } from '@/components/sidebar'

export default function HairLossPage() {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <article className="flex-1">
        <h1 className="text-4xl font-bold mb-8">Bari Glow for Hair Loss</h1>
        
        <section className="prose lg:prose-lg max-w-none">
          <h2 className="text-3xl font-bold mb-6">
            Understanding Hair Loss After Weight Loss Surgery
          </h2>
          
          <p className="text-gray-700 mb-6">
            Hair loss is a common concern for many individuals who have undergone weight loss surgery. 
            This phenomenon, known as telogen effluvium, typically occurs 3-6 months post-surgery and 
            is primarily due to the body's response to the significant changes in nutrition and metabolism.
          </p>

          <h3 className="text-2xl font-bold mb-4">
            How Bari Glow Can Help
          </h3>

          <p className="text-gray-700 mb-6">
            Bari Glow is specifically formulated to address the nutritional deficiencies that can lead 
            to hair loss after weight loss surgery. Our product provides essential vitamins, minerals, 
            and nutrients that support healthy hair growth and maintenance.
          </p>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Biotin for keratin production</li>
            <li>Iron to support hair follicle health</li>
            <li>Zinc for oil gland function around hair follicles</li>
            <li>Vitamins A, C, D, and E for overall hair and scalp health</li>
          </ul>
        </section>
      </article>
      
      <Sidebar />
    </div>
  )
}

