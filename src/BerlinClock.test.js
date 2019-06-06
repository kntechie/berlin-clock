import React from 'react';
import ReactDOM from 'react-dom';
import BerlinClock from './BerlinClock';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

configure({ adapter: new Adapter() });

describe('Berlin clock', function(){

  var wrapper;
  var clock;
  
  describe('Single minutes row', function(){

      beforeEach(function(){
          wrapper = shallow(<BerlinClock />);
          clock = wrapper.instance();
      });

      it('at 00:00:00 should have all the lamp to be OFF (OOOO)', () => {
          var time = new Date(2019, 6, 7, 0, 0, 0);
      
          clock.setTime(time);
      
          expect(clock.bottomMinutes()).toBe('OOOO');
      });

      it('at 23:59:59 should have all the lamp to be ON (YYYY)', () => {
          var time = new Date(2019, 6, 7, 23, 59, 59);
      
          clock.setTime(time);
      
          expect(clock.bottomMinutes()).toBe('YYYY');
      });

  });

});
