import { Component } from '@angular/core';

interface Opcion {
  texto: string;
  seleccionada: boolean;
}

interface Pregunta {
  enunciado: string;
  opciones: Opcion[];
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  preguntas = [
    {
      enunciado: '¿Cuál es la ciudad conocida como la "ciudad de la eterna primavera" en Colombia?',
      opciones: [
        { texto: 'Medellín', seleccionada: false },
        { texto: 'Bogotá', seleccionada: false },
        { texto: 'Cartagena', seleccionada: false },
        { texto: 'Cali', seleccionada: false }
      ]
    },
    {
      enunciado: '¿Cuál es el nombre del parque nacional que alberga la Catedral de Sal en Zipaquirá?',
      opciones: [
        { texto: 'Parque Nacional Natural Tayrona', seleccionada: false },
        { texto: 'Parque Nacional Natural Los Nevados', seleccionada: false },
        { texto: 'Parque Nacional Natural Sierra Nevada de Santa Marta', seleccionada: false },
        { texto: 'Parque Nacional Natural Chingaza', seleccionada: false }
      ]
    },
    {
      enunciado: '¿Cuál de estos lugares famosos se encuentra en la ciudad de Santa Marta?',
      opciones: [
        { texto: 'Ciudad Perdida', seleccionada: false },
        { texto: 'Ciudad de Cali', seleccionada: false },
        { texto: 'Ciudad de Cartagena', seleccionada: false },
        { texto: 'Ciudad de Pasto', seleccionada: false }
      ]
    },
    {
      enunciado: '¿Cuál de los siguientes no es un sitio arqueológico en Colombia?',
      opciones: [
        { texto: 'Ciudad Perdida', seleccionada: false },
        { texto: 'San Agustín', seleccionada: false },
        { texto: 'Salento', seleccionada: false },
        { texto: 'Tierradentro', seleccionada: false }
      ]
    },
    {
      enunciado: '¿Cuál es el destino turístico famoso por su arquitectura colonial y sus murallas?',
      opciones: [
        { texto: 'Santa Marta', seleccionada: false },
        { texto: 'Cartagena de Indias', seleccionada: false },
        { texto: 'San Andrés', seleccionada: false },
        { texto: 'Manizales', seleccionada: false }
      ]
    },
    {
      enunciado: '¿Cuál es el parque nacional que alberga la mayor concentración de aves en el mundo?',
      opciones: [
        { texto: 'Parque Nacional Natural Los Nevados', seleccionada: false },
        { texto: 'Parque Nacional Natural Tayrona', seleccionada: false },
        { texto: 'Parque Nacional Natural Amacayacu', seleccionada: false },
        { texto: 'Parque Nacional Natural El Cocuy', seleccionada: false }
      ]
    },
    {
      enunciado: '¿Dónde se encuentra el famoso Cañón del Chicamocha?',
      opciones: [
        { texto: 'Boyacá', seleccionada: false },
        { texto: 'Santander', seleccionada: false },
        { texto: 'Cundinamarca', seleccionada: false },
        { texto: 'Meta', seleccionada: false }
      ]
    },
    {
      enunciado: '¿Cuál es la famosa playa ubicada en la isla de San Andrés?',
      opciones: [
        { texto: 'Playa Blanca', seleccionada: false },
        { texto: 'Bocagrande', seleccionada: false },
        { texto: 'El Rodadero', seleccionada: false },
        { texto: 'Playa Azul', seleccionada: false }
      ]
    },
    {
      enunciado: '¿Qué ciudad colombiana es conocida por su festival anual de las flores?',
      opciones: [
        { texto: 'Bogotá', seleccionada: false },
        { texto: 'Cali', seleccionada: false },
        { texto: 'Medellín', seleccionada: false },
        { texto: 'Barranquilla', seleccionada: false }
      ]
    },
    {
      enunciado: '¿Qué región de Colombia es famosa por su producción de café?',
      opciones: [
        { texto: 'Valle del Cauca', seleccionada: false },
        { texto: 'Eje Cafetero', seleccionada: false },
        { texto: 'Amazonía', seleccionada: false },
        { texto: 'Llanos Orientales', seleccionada: false }
      ]
    }
  ];

  toggleSeleccion(pregunta: Pregunta, opcionIndex: number): void {
    pregunta.opciones[opcionIndex].seleccionada = !pregunta.opciones[opcionIndex].seleccionada;
  }
}
