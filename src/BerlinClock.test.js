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

      it('at 12:32:00 should have first two lamp to be ON (YYOO)', () => {
        var time = new Date(2019, 6, 7, 12, 32, 0);
    
        clock.setTime(time);
    
        expect(clock.bottomMinutes()).toBe('YYOO');
      });

      it('at 12:34:00 should have all the lamp to be ON (YYYY)', () => {
        var time = new Date(2019, 6, 7, 12, 34, 0);
    
        clock.setTime(time);
    
        expect(clock.bottomMinutes()).toBe('YYYY');
      });

      it('at 12:35:00 should have all the lamp to be OFF (OOOO)', () => {
        var time = new Date(2019, 6, 7, 12, 35, 0);
    
        clock.setTime(time);
    
        expect(clock.bottomMinutes()).toBe('OOOO');
      });

  });

  describe('Five minutes row', function(){

    beforeEach(function(){
        wrapper = shallow(<BerlinClock />);
        clock = wrapper.instance();
    });

    it('at 00:00:00 should have all the lamp to be OFF (OOOOOOOOOOO)', () => {
        var time = new Date(2019, 6, 7, 0, 0, 0);
    
        clock.setTime(time);
    
        expect(clock.topMinutes()).toBe('OOOOOOOOOOO');
    });

    it('at 23:59:59 should have all the lamp to be ON (YYRYYRYYRYY)', () => {
      var time = new Date(2019, 6, 7, 23, 59, 59);
  
      clock.setTime(time);
  
      expect(clock.topMinutes()).toBe('YYRYYRYYRYY');
    });

    it('at 12:04:00 should have all the lamp to be OFF (OOOOOOOOOOO)', () => {
      var time = new Date(2019, 6, 7, 12, 4, 0);
  
      clock.setTime(time);
  
      expect(clock.topMinutes()).toBe('OOOOOOOOOOO');
    });

    it('at 12:23:00 should have some of the lamp to be ON (YYRYOOOOOOO)', () => {
      var time = new Date(2019, 6, 7, 12, 23, 0);
  
      clock.setTime(time);
  
      expect(clock.topMinutes()).toBe('YYRYOOOOOOO');
    });

    it('at 12:35:00 should have some of the lamp to be OFF (YYRYYRYOOOO)', () => {
      var time = new Date(2019, 6, 7, 12, 35, 0);
  
      clock.setTime(time);
  
      expect(clock.topMinutes()).toBe('YYRYYRYOOOO');
    });

  });

  describe('Single hours row', function(){

    beforeEach(function(){
        wrapper = shallow(<BerlinClock />);
        clock = wrapper.instance();
    });

    it('at 00:00:00 should have all the lamp to be OFF (OOOO)', () => {
        var time = new Date(2019, 6, 7, 0, 0, 0);
    
        clock.setTime(time);
    
        expect(clock.bottomHours()).toBe('OOOO');
    });

    it('at 14:35:00 should have all the lamp to be ON (RRRR)', () => {
      var time = new Date(2019, 6, 7, 14, 35, 0);
  
      clock.setTime(time);
  
      expect(clock.bottomHours()).toBe('RRRR');
    });

    it('at 23:59:59 should have some of the lamp to be ON (RRRO)', () => {
      var time = new Date(2019, 6, 7, 23, 59, 59);
  
      clock.setTime(time);
  
      expect(clock.bottomHours()).toBe('RRRO');
    });

    it('at 02:04:00 should have some of the lamp to be OFF (RROO)', () => {
      var time = new Date(2019, 6, 7, 2, 4, 0);
  
      clock.setTime(time);
  
      expect(clock.bottomHours()).toBe('RROO');
    });

    it('at 08:23:00 should have some of the lamp to be ON (RRRO)', () => {
      var time = new Date(2019, 6, 7, 8, 23, 0);
  
      clock.setTime(time);
  
      expect(clock.bottomHours()).toBe('RRRO');
    });

  });

  describe('Five hours row', function(){

    beforeEach(function(){
        wrapper = shallow(<BerlinClock />);
        clock = wrapper.instance();
    });

    it('at 00:00:00 should have all the lamp to be OFF (OOOO)', () => {
        var time = new Date(2019, 6, 7, 0, 0, 0);
    
        clock.setTime(time);
    
        expect(clock.topHours()).toBe('OOOO');
    });

    it('at 23:59:59 should have all the lamp to be ON (RRRR)', () => {
      var time = new Date(2019, 6, 7, 23, 59, 59);
  
      clock.setTime(time);
  
      expect(clock.topHours()).toBe('RRRR');
    });

    it('at 02:04:00 should have all the lamp to be OFF (OOOO)', () => {
        var time = new Date(2019, 6, 7, 2, 4, 0);
    
        clock.setTime(time);
    
        expect(clock.topHours()).toBe('OOOO');
    });

    it('at 08:23:00 should have all the lamp to be ON (ROOO)', () => {
      var time = new Date(2019, 6, 7, 8, 23, 0);

      clock.setTime(time);

      expect(clock.topHours()).toBe('ROOO');
    });

    it('at 16:35:00 should have all the lamp to be OFF (RRRO)', () => {
      var time = new Date(2019, 6, 7, 16, 35, 0);

      clock.setTime(time);

      expect(clock.topHours()).toBe('RRRO');
    });

  });

  describe('Five hours row', function(){

    beforeEach(function(){
        wrapper = shallow(<BerlinClock />);
        clock = wrapper.instance();
    });

    it('at 00:00:00 should have the lamp to be ON (Y)', () => {
        var time = new Date(2019, 6, 7, 0, 0, 0);
    
        clock.setTime(time);
    
        expect(clock.seconds()).toBe('Y');
    });

  });
  
});
