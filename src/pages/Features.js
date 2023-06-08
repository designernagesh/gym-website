import FeatureItem from '../components/FeatureItem';
import data from '../data/data';

function Features() {
  return (
    <section id="features">
      <div className="a-container">
        {
            data.map( (item, i) => {
                return (
                    <FeatureItem key={i} item={item} />
                )
            })
        }
      </div>
    </section>
  );
}

export default Features;
