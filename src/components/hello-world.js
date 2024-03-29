export default class Hello {
  constructor(element) {
    console.log('Hello World', element);

    window.onload = () => {
      const button = document.querySelector('button[data-action="change"]');
      button.innerText = 'NEXT';

      let places = staticLoadPlaces();
      renderPlaces(places);
    };

    function staticLoadPlaces() {
      return [
        {
          name: 'Augmented Reality',
          location: {
            lat: 55.649142,
            lng: 12.554941,
          },
        },
      ];
    }

    var models = [
      {
        url: '../assets/3DObjects/magnemite/scene.gltf',
        scale: '0.5 0.5 0.5',
        info: 'Magnemite',
        rotation: '0 180 0',
      },
      {
        url: '../assets/3DObjects/nissan/scene.gltf',
        scale: '0.2 0.2 0.2',
        rotation: '0 180 0',
        info: 'Nissan GTRs Max',
      },
      {
        url: '../assets/3DObjects/spinosaurus/scene.gltf',
        scale: '0.08 0.08 0.08',
        rotation: '0 180 0',
        info: 'Spinosaurus',
      },
      {
        url: '../assets/3DObjects/velociraptor/scene.gltf',
        scale: '0.08 0.08 0.08',
        rotation: '0 180 0',
        info: 'Velociraptor',
      },
      {
        url: '../assets/3DObjects/warrior/scene.gltf',
        scale: '0.08 0.08 0.08',
        rotation: '0 180 0',
        info: 'Warrior',
      },
    ];

    var modelIndex = 0;
    var setModel = function (model, entity) {
      if (model.scale) {
        entity.setAttribute('scale', model.scale);
      }

      if (model.rotation) {
        entity.setAttribute('rotation', model.rotation);
      }

      if (model.position) {
        entity.setAttribute('position', model.position);
      }

      entity.setAttribute('gltf-model', model.url);

      const div = document.querySelector('.instructions');
      div.innerText = model.info;
    };

    function renderPlaces(places) {
      let scene = document.querySelector('a-scene');

      places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        let model = document.createElement('a-entity');
        model.setAttribute(
          'gps-entity-place',
          `latitude: ${latitude}; longitude: ${longitude};`
        );

        setModel(models[modelIndex], model);

        model.setAttribute('animation-mixer', '');
        console.log('model', model);
        document
          .querySelector('button[data-action="change"]')
          .addEventListener('click', function () {
            var entity = document.querySelector('[gps-entity-place]');
            modelIndex++;
            var newIndex = modelIndex % models.length;
            setModel(models[newIndex], entity);
          });

        scene.appendChild(model);
      });
    }
  }
}
