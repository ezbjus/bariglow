import { Sidebar } from '@/components/sidebar'

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <article className="flex-1">
        <h1 className="text-4xl font-bold mb-8">Bari Glow for Hair Loss</h1>
        
        <section className="prose lg:prose-lg max-w-none">
          <h2 className="text-3xl font-bold mb-6">
            Transform Your Hair Health Post-Weight Loss Surgery with Bari Glow
          </h2>
          
          <p className="text-gray-700 mb-6">
            Weight loss surgery can be a transformative journey, opening doors to healthier living, improved
            mobility, and enhanced self-confidence. However, this path is not without its challenges. Many
            individuals who undergo bariatric surgery encounter nutritional deficiencies that can lead to hair
            thinning or loss—a distressing side effect that affects self-esteem and confidence. Enter Bari
            Glow, a revolutionary product meticulously crafted to support hair health for those on this unique
            journey.
          </p>

          <h3 className="text-2xl font-bold mb-4">
            Understanding the Connection Between Weight Loss Surgery and Hair Loss
          </h3>

          <p className="text-gray-700 mb-6">
            Hair loss after weight loss surgery is a common issue, typically occurring about three to six
            months post-surgery. This phenomenon, known as telogen effluvium, is primarily a result of the
            body's response to dietary restrictions and nutritional imbalances. Post-surgery, rapid weight
            loss and changes in how your body absorbs nutrients can lead to deficiencies in critical vitamins
            and minerals necessary for hair growth, such as:
          </p>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>Protein:</strong> Essential for the production of keratin, the protein that makes up the structure of
              hair.
            </li>
            <li>
              <strong>Iron:</strong> Vital for hair follicle cell growth, as it aids in delivering oxygen to hair roots.
            </li>
            <li>
              <strong>Zinc:</strong> Supports the functioning of oil glands around hair follicles.
            </li>
            <li>
              <strong>Biotin (Vitamin B7):</strong> Plays a crucial role in the production of keratin.
            </li>
            <li>
              <strong>Vitamin A, C, D, and E:</strong> Each contributes to the health of hair and scalp in different ways.
            </li>
          </ul>

          <h3 className="text-2xl font-bold mb-4">
            Introducing Bari Glow: Your Solution to Hair Loss After Weight Loss Surgery
          </h3>

          <p className="text-gray-700">
            Bariatric Glow is designed with post-weight-loss surgery patients in mind. Recognizing the
            unique nutritional challenges faced by this community, our formula combines essential vitamins,
            minerals, and nutrients specifically targeted to support healthy hair growth and maintenance.
          </p>
        </section>
      </article>
      
      <Sidebar />
    </div>
  )
}

