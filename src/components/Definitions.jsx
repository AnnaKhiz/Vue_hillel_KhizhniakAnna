import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DefinitionsJsx',
  props: {
    definitions: {
      type: Array,
      default: () => [],
      required: true
    },
  },
  render() {
    return (
      <dl>
        {this.definitions.map(item => (
          <div key={item.id}>
            <dt>{item.dt}</dt>
            <dd>{item.dd}</dd>
          </div>
        ))}
      </dl>
    );
  }
});
