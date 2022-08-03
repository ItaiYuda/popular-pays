import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class LocationRoute extends Route {
  @service store;

  async model(params) {
    return await this.store.findRecord('location', params.location_id);
  }
}

// /api/location/1231231
