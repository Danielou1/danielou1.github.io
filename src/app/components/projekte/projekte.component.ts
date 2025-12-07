import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { Language, LanguageService } from '../../language.service';
import { SceneControlService } from '../../scene-control.service';

@Component({
  selector: 'app-projekte',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projekte.component.html',
  styleUrls: ['./projekte.component.css']
})
export class ProjekteComponent implements OnInit, OnDestroy {

  currentLanguage: Language = 'de';
  private langSub!: Subscription;

  projectsData = {
    de: {
      title: 'Ausgewählte Projekte',
      projects: [
        {
          name: 'AVR Synthesizer & Musik-Player',
          description: 'Ein mehrstufiges Embedded-Projekt, das einen AVR-Mikrocontroller in ein Musikinstrument verwandelt. Von der Erzeugung reiner Sinustöne mittels DAC und Timern über ein digitales Echtzeit-Piano bis hin zu einem kompletten Melodie-Player, der vordefinierte Lieder (z.B. Super Mario) durch präzise Steuerung von Tonfrequenz und -dauer abspielt.',
          tags: ['AVR', 'Embedded C', 'Synthesizer', 'DAC', 'Timers', 'Interrupts']
        },
        {
          name: 'RGB-LED-Steuerung via USART',
          description: 'Programmierung eines AVR-Mikrocontrollers zur Steuerung einer RGB-LED. Das System empfängt Farbcodes (z.B. "255,100,0#") über die serielle Schnittstelle (USART) und passt die Farbe der LED dynamisch durch die Generierung von drei PWM-Signalen an.',
          tags: ['AVR', 'Embedded C', 'PWM', 'USART', 'Serial']
        },
        {
          name: 'Infrarot-gesteuerter Timer',
          description: 'Entwicklung eines Timers für AVR-Mikrocontroller, der vollständig über eine IR-Fernbedienung nach dem NEC-Protokoll gesteuert wird. Das Projekt umfasste die C-Programmierung von Timer/Counter-Interrupts, die Behandlung externer Interrupts zur IR-Signaldekodierung und die Ansteuerung eines I2C-LCDs.',
          tags: ['AVR', 'Embedded C', 'IR-Protokoll', 'I2C', 'Timers', 'Interrupts']
        },
        {
          name: 'I2C-Farbsensor (TCS34725)',
          description: 'Implementierung von I2C-Master-Routinen zur Kommunikation mit Peripheriegeräten. Das Projekt umfasste das Senden von Konfigurationsbefehlen an ein LCD und das Auslesen und Interpretieren von RGBC-Farbdaten (Rot, Grün, Blau, Clear) von einem TCS34725-Farbsensor.',
          tags: ['AVR', 'Embedded C', 'I2C', 'Sensoren', 'LCD']
        },
        {
          name: 'Servomotor-Steuerung mit PWM',
          description: 'Ansteuerung eines Standard-Servomotors durch Generierung eines präzisen PWM-Signals mit einem AVR-Timer. Das Programm bewegt den Servo schrittweise zwischen vordefinierten Positionen, um die Grundlagen der Motorsteuerung zu demonstrieren.',
          tags: ['AVR', 'Embedded C', 'PWM', 'Servo', 'Timers']
        },
        {
          name: 'Digitales Voltmeter mit ADC',
          description: 'Nutzung des eingebauten 12-Bit-Analog-Digital-Wandlers (ADC) des AVR, um eine anliegende Spannung zu messen. Das Ergebnis wurde in Volt und als Prozentsatz umgerechnet und auf einem LCD-Display flimmerfrei (nur bei Wertänderung) angezeigt.',
          tags: ['AVR', 'Embedded C', 'ADC', 'Sensoren', 'LCD']
        },
        {
          name: 'Interaktives 3D-Portfolio',
          description: 'Entwicklung dieses interaktiven 3D-Portfolios als virtuelle Bahnhofsszene mit Angular und Three.js. Integration von synchronisierten HTML-Panels für dynamische Inhalte und interaktive Elemente.',
          tags: ['Angular', 'Three.js', 'TypeScript', 'WebGL', 'SSR', 'UI/UX']
        },
        {
          name: 'ExamBuilder (Bachelorarbeit)',
          description: 'Desktop-Anwendung in JavaFX zur Erstellung und Verwaltung von Prüfungen. Kernstück ist die KI-gestützte Umformulierung von Fragen über die Gemini API zur Steigerung der Prüfungsvielfalt.',
          tags: ['JavaFX', 'Maven', 'Apache POI', 'Gemini API', 'MVC']
        },
        {
          name: 'Smart Lab System',
          description: 'Entwicklung eines intelligenten Laborsystems mit STM32 und BME280-Sensorik. Implementierung der Embedded-Software in C/C++ und einer JavaFX-GUI zur Echtzeitvisualisierung via MQTT.',
          tags: ['C/C++', 'STM32', 'JavaFX', 'MQTT', 'Embedded']
        },
        {
          name: 'Echtzeit-Stoppuhr mit STM32F4',
          description: 'Implementierung einer präzisen digitalen Stoppuhr auf einem STM32F4 Mikrocontroller. Das Projekt umfasste die Programmierung von Timern, Interrupts und die Ansteuerung eines LCD-Displays zur Anzeige der Zeit. Fokus auf Echtzeitverarbeitung und Hardware-Interaktion.',
          tags: ['STM32F4', 'Embedded C', 'Mikrocontroller', 'Timer', 'Interrupts', 'LCD']
        },
        {
          name: 'Autonome Wetterstation mit STM32F4',
          description: 'Entwicklung einer autonomen Wetterstation basierend auf einem STM32F4 Mikrocontroller. Integration verschiedener Sensoren (Temperatur, Luftfeuchtigkeit, Druck) und Datenübertragung über UART/I2C. Visualisierung der Wetterdaten auf einem Display oder über serielle Schnittstelle.',
          tags: ['STM32F4', 'Embedded C', 'Sensoren', 'UART', 'I2C', 'Wetterdaten']
        },
        {
          name: 'Terminal-Snake in C',
          description: 'Implementierung des klassischen Snake-Spiels als Konsolenanwendung in C. Das Projekt demonstriert Kenntnisse in der Konsolenprogrammierung, Datenstrukturen und Algorithmen für die Spielmechanik und Kollisionserkennung.',
          tags: ['C-Programmierung', 'Konsolenanwendung', 'Algorithmen', 'Spieleentwicklung']
        },
        {
          name: 'Web-Ping-Pong mit JavaScript & Docker',
          description: 'Entwicklung eines interaktiven Ping-Pong-Spiels für den Webbrowser mit JavaScript. Das Projekt wurde in Docker-Containern verpackt, um eine einfache Bereitstellung und konsistente Ausführung zu gewährleisten. Fokus auf Frontend-Entwicklung und Containerisierung.',
          tags: ['JavaScript', 'HTML5 Canvas', 'Webentwicklung', 'Docker', 'Containerisierung']
        },
        {
          name: 'Connect Four (Vier Gewinnt)',
          description: 'Eine Java-Implementierung des klassischen Strategiespiels Vier Gewinnt. Dieses Projekt demonstriert objektorientierte Programmierung, Spiellogik und grundlegende Algorithmen für die Gewinn- und Unentschieden-Erkennung.',
          tags: ['Java', 'Spieleentwicklung', 'Algorithmen', 'OOP']
        },
        {
          name: 'C-Grundlagen-Projekte',
          description: 'Eine Sammlung von grundlegenden C-Projekten, die verschiedene Kernkonzepte der Sprache abdecken, darunter Datenstrukturen, Zeiger, Speicherverwaltung und grundlegende Algorithmen. Dient als solides Fundament für die hardwarenahe Programmierung.',
          tags: ['C', 'Programmierung', 'Grundlagen', 'Algorithmen', 'Datenstrukturen']
        },
        {
          name: 'Echtzeit-Anwendungen mit FreeRTOS auf STM32F4',
          description: 'Implementierung von FreeRTOS auf einem STM32F4-Mikrocontroller mit STM32CubeIDE. Das Projekt umfasst das Management von Tasks, Queues, Semaphoren und Timern zur Entwicklung robuster Echtzeitanwendungen im Embedded-Bereich.',
          tags: ['FreeRTOS', 'STM32F4', 'Echtzeit', 'Embedded C', 'RTOS']
        },
        {
          name: 'Bluetooth-Datenleser mit Java und STM32F4',
          description: 'Eine JavaFX-Anwendung, die Daten von einem STM32F4-Mikrocontroller über ein HC-05 Bluetooth-Modul empfängt und anzeigt. Die Kommunikation erfolgt über eine serielle Schnittstelle (COM-Port) und demonstriert die Verbindung von Embedded-Systemen mit Desktop-Anwendungen.',
          tags: ['JavaFX', 'Bluetooth', 'STM32F4', 'Embedded', 'Serial']
        },
        {
          name: 'Einführung in STM32: GPIO-Steuerung',
          description: 'Ein grundlegendes Projekt zur Demonstration der GPIO-Ausgabekonfiguration auf einem STM32-Mikrocontroller unter Verwendung der HAL-Bibliothek. Dient als Einstieg in die STM32-Entwicklung.',
          tags: ['STM32', 'HAL', 'GPIO', 'Embedded C']
        },
        {
          name: '7-Segment-Anzeige-Treiber',
          description: 'Entwicklung eines modularen Treibers für eine 7-Segment-Anzeige. Das Projekt umfasst komplexes GPIO-Management und zeigt, wie hardwarespezifische Logik für eine einfache Wiederverwendung gekapselt wird.',
          tags: ['STM32', 'GPIO', 'Treiberentwicklung', 'Embedded C']
        },
        {
          name: 'Joystick-Steuerung mit Zustandsautomat',
          description: 'Implementierung der digitalen Eingabe von einem Joystick mit Pull-Up/Pull-Down-Widerständen. Die Logik wird durch einen Zustandsautomaten gesteuert, um die verschiedenen Richtungen und den Tastendruck des Joysticks zu erfassen.',
          tags: ['STM32', 'GPIO', 'State Machine', 'Embedded C']
        },
        {
          name: 'Abstrakter LCD-Treiber via SPI',
          description: 'Erstellung eines Wrappers für einen LCD-Treiber zur Abstraktion der Hardware-Details. Die Kommunikation erfolgt über SPI und ermöglicht eine saubere Trennung zwischen Anwendungslogik und Treibercode.',
          tags: ['STM32', 'SPI', 'LCD', 'Treiberentwicklung', 'Embedded C']
        },
        {
          name: 'ADC-Wandlung im Polling-Modus',
          description: 'Ein Projekt zur Demonstration der Analog-Digital-Wandlung (ADC) im Polling-Modus. Ein Potentiometer wird verwendet, um eine variable Spannung zu erzeugen, die vom ADC des STM32 gemessen wird.',
          tags: ['STM32', 'ADC', 'Polling', 'Embedded C']
        },
        {
          name: 'Effiziente ADC-Wandlung mit DMA',
          description: 'Eine erweiterte Version des ADC-Projekts, bei der Direct Memory Access (DMA) verwendet wird, um die ADC-Messwerte effizient in den Speicher zu übertragen, ohne die CPU zu belasten.',
          tags: ['STM32', 'ADC', 'DMA', 'Embedded C']
        },
        {
          name: 'Hardware-PWM zum Blinken einer LED',
          description: 'Erzeugung eines niederfrequenten Signals (1 Hz) mit einem Hardware-Timer im PWM-Modus, um eine LED präzise blinken zu lassen. Dies demonstriert die Nutzung von Timern für nicht-blockierende Verzögerungen.',
          tags: ['STM32', 'PWM', 'Timer', 'Embedded C']
        },
        {
          name: 'Echtzeit-PWM-Steuerung zum Dimmen',
          description: 'Ein interaktives Projekt, das den Wert eines ADC (von einem Potentiometer) auf ein PWM-Signal abbildet, um die Helligkeit einer LED in Echtzeit zu steuern. Behandelt auch die Ansteuerung von Active-Low-Hardware.',
          tags: ['STM32', 'PWM', 'ADC', 'Echtzeit', 'Embedded C']
        },
        {
          name: 'PI-Regler für Lüftergeschwindigkeit',
          description: 'Implementierung eines geschlossenen Regelkreises (PI-Regler) zur Steuerung der Geschwindigkeit eines Lüfters. Das System liest die Drehzahl über einen Tacho und passt die PWM-Ausgabe an, um eine Zieldrehzahl beizubehalten.',
          tags: ['STM32', 'PI-Regler', 'PWM', 'Regelungstechnik', 'Embedded C']
        },
        {
          name: 'Wetterstation mit CAN-Bus-Kommunikation',
          description: 'Eine fortschrittliche Wetterstation, die einen I²C-Sensor (BME280) zur Erfassung von Umgebungsdaten integriert und diese über einen CAN-Bus überträgt. Inklusive CAN-Loopback-Tests für robustes Debugging.',
          tags: ['STM32', 'CAN-Bus', 'I2C', 'BME280', 'Embedded C']
        }
      ]
    },
    en: {
      title: 'Featured Projects',
      projects: [
        {
          name: 'AVR Synthesizer & Music Player',
          description: 'A multi-stage embedded project that turns an AVR microcontroller into a musical instrument. From generating pure sine wave tones using a DAC and timers, to a real-time digital piano, to a full melody player capable of playing predefined songs (e.g., Super Mario) by precisely controlling note frequency and duration.',
          tags: ['AVR', 'Embedded C', 'Synthesizer', 'DAC', 'Timers', 'Interrupts']
        },
        {
          name: 'RGB LED Control via USART',
          description: 'Programmed an AVR microcontroller to control an RGB LED. The system receives color codes (e.g., "255,100,0#") via the serial interface (USART) and dynamically adjusts the LED color by generating three PWM signals.',
          tags: ['AVR', 'Embedded C', 'PWM', 'USART', 'Serial']
        },
        {
          name: 'IR Remote Controlled Timer',
          description: 'Developed a timer for AVR microcontrollers, fully controllable via an IR remote using the NEC protocol. The project involved C programming for timer/counter interrupts, handling external interrupts for IR signal decoding, and interfacing with an I2C LCD.',
          tags: ['AVR', 'Embedded C', 'IR Protocol', 'I2C', 'Timers', 'Interrupts']
        },
        {
          name: 'I2C Color Sensor (TCS34725)',
          description: 'Implementation of I2C master routines to communicate with peripherals. The project involved sending configuration commands to an LCD and reading/interpreting RGBC (Red, Green, Blue, Clear) color data from a TCS34725 color sensor.',
          tags: ['AVR', 'Embedded C', 'I2C', 'Sensors', 'LCD']
        },
        {
          name: 'Servo Motor Control with PWM',
          description: 'Controlled a standard servo motor by generating a precise PWM signal with an AVR timer. The program moves the servo incrementally between predefined positions, demonstrating the fundamentals of motor control.',
          tags: ['AVR', 'Embedded C', 'PWM', 'Servo', 'Timers']
        },
        {
          name: 'Digital Voltmeter with ADC',
          description: 'Utilized the AVR\'s built-in 12-bit Analog-to-Digital Converter (ADC) to measure an input voltage. The result was converted to volts and a percentage, and displayed on an LCD with flicker-free logic (updating only on value change).',
          tags: ['AVR', 'Embedded C', 'ADC', 'Sensors', 'LCD']
        },
        {
          name: 'Interactive 3D Portfolio',
          description: 'Development of this interactive 3D portfolio as a virtual train station scene using Angular and Three.js. Integration of synchronized HTML panels for dynamic content and interactive elements.',
          tags: ['Angular', 'Three.js', 'TypeScript', 'WebGL', 'SSR', 'UI/UX']
        },
        {
          name: 'ExamBuilder (Bachelor Thesis)',
          description: 'Desktop application built with JavaFX for creating and managing exams. A core feature is the AI-powered rephrasing of questions via the Gemini API to enhance exam diversity.',
          tags: ['JavaFX', 'Maven', 'Apache POI', 'Gemini API', 'MVC']
        },
        {
          name: 'Smart Lab System',
          description: 'Developed a smart laboratory system using STM32 and BME280 sensors. Implemented the embedded software in C/C++ and a JavaFX GUI for real-time visualization via MQTT.',
          tags: ['C/C++', 'STM32', 'JavaFX', 'MQTT', 'Embedded']
        },
        {
          name: 'Real-time Stopwatch with STM32F4',
          description: 'Implementation of a precise digital stopwatch on an STM32F4 microcontroller. The project involved programming timers, interrupts, and controlling an LCD display for time visualization. Focus on real-time processing and hardware interaction.',
          tags: ['STM32F4', 'Embedded C', 'Microcontroller', 'Timers', 'Interrupts', 'LCD']
        },
        {
          name: 'Autonomous Weather Station with STM32F4',
          description: 'Development of an autonomous weather station based on an STM32F4 microcontroller. Integration of various sensors (temperature, humidity, pressure) and data transmission via UART/I2C. Visualization of weather data on a display or via serial interface.',
          tags: ['STM32F4', 'Embedded C', 'Sensors', 'UART', 'I2C', 'Weather Data']
        },
        {
          name: 'Terminal Snake Game in C',
          description: 'Implementation of the classic Snake game as a console application in C. This project demonstrates knowledge of console programming, data structures, and algorithms for game mechanics and collision detection.',
          tags: ['C Programming', 'Console Application', 'Algorithms', 'Game Development']
        },
        {
          name: 'Web Ping-Pong Game with JavaScript & Docker',
          description: 'Development of an interactive Ping-Pong game for the web browser using JavaScript. The project was containerized with Docker for easy deployment and consistent execution. Focus on frontend development and containerization.',
          tags: ['JavaScript', 'HTML5 Canvas', 'Web Development', 'Docker', 'Containerization']
        },
        {
          name: 'Connect Four',
          description: 'A Java implementation of the classic strategy game Connect Four. This project demonstrates object-oriented programming, game logic, and basic algorithms for win and draw detection.',
          tags: ['Java', 'Game Development', 'Algorithms', 'OOP']
        },
        {
          name: 'C-Basics Projects',
          description: 'A collection of fundamental C projects covering various core concepts of the language, including data structures, pointers, memory management, and basic algorithms. Serves as a solid foundation for low-level programming.',
          tags: ['C', 'Programming', 'Basics', 'Algorithms', 'Data Structures']
        },
        {
          name: 'Real-Time Applications with FreeRTOS on STM32F4',
          description: 'Implementation of FreeRTOS on an STM32F4 microcontroller using STM32CubeIDE. The project covers the management of tasks, queues, semaphores, and timers for developing robust real-time embedded applications.',
          tags: ['FreeRTOS', 'STM32F4', 'Real-Time', 'Embedded C', 'RTOS']
        },
        {
          name: 'Bluetooth Data Reader with Java and STM32F4',
          description: 'A JavaFX application that receives and displays data from an STM32F4 microcontroller via an HC-05 Bluetooth module. Communication is handled over a serial interface (COM port), demonstrating the link between embedded systems and desktop applications.',
          tags: ['JavaFX', 'Bluetooth', 'STM32F4', 'Embedded', 'Serial']
        },
        {
          name: 'Introduction to STM32: GPIO Control',
          description: 'A basic project demonstrating GPIO output configuration on an STM32 microcontroller using the HAL library. Serves as an entry point into STM32 development.',
          tags: ['STM32', 'HAL', 'GPIO', 'Embedded C']
        },
        {
          name: '7-Segment Display Driver',
          description: 'Development of a modular driver for a 7-segment display. The project involves complex GPIO management and demonstrates how to encapsulate hardware-specific logic for easy reuse.',
          tags: ['STM32', 'GPIO', 'Driver Development', 'Embedded C']
        },
        {
          name: 'Joystick Control with State Machine',
          description: 'Implementation of digital input from a joystick with pull-up/pull-down resistors. The logic is controlled by a state machine to capture the different directions and button press of the joystick.',
          tags: ['STM32', 'GPIO', 'State Machine', 'Embedded C']
        },
        {
          name: 'Abstract LCD Driver via SPI',
          description: 'Creation of a wrapper for an LCD driver to abstract away the hardware details. Communication is handled via SPI, allowing for a clean separation between application logic and driver code.',
          tags: ['STM32', 'SPI', 'LCD', 'Driver Development', 'Embedded C']
        },
        {
          name: 'ADC Conversion in Polling Mode',
          description: 'A project to demonstrate Analog-to-Digital Conversion (ADC) in polling mode. A potentiometer is used to generate a variable voltage, which is measured by the STM32\'s ADC.',
          tags: ['STM32', 'ADC', 'Polling', 'Embedded C']
        },
        {
          name: 'Efficient ADC Conversion with DMA',
          description: 'An advanced version of the ADC project that uses Direct Memory Access (DMA) to efficiently transfer ADC readings to memory without burdening the CPU.',
          tags: ['STM32', 'ADC', 'DMA', 'Embedded C']
        },
        {
          name: 'Hardware PWM for Blinking an LED',
          description: 'Generation of a low-frequency signal (1 Hz) using a hardware timer in PWM mode to blink an LED precisely. This demonstrates the use of timers for non-blocking delays.',
          tags: ['STM32', 'PWM', 'Timer', 'Embedded C']
        },
        {
          name: 'Real-Time PWM Control for Dimming',
          description: 'An interactive project that maps the value of an ADC (from a potentiometer) to a PWM signal to control the brightness of an LED in real-time. Also handles active-low hardware.',
          tags: ['STM32', 'PWM', 'ADC', 'Real-Time', 'Embedded C']
        },
        {
          name: 'PI Controller for Fan Speed',
          description: 'Implementation of a closed-loop control system (PI controller) to manage the speed of a fan. The system reads the RPM from a tachometer and adjusts the PWM output to maintain a target speed.',
          tags: ['STM32', 'PI Controller', 'PWM', 'Control Systems', 'Embedded C']
        },
        {
          name: 'Weather Station with CAN Bus Communication',
          description: 'An advanced weather station that integrates an I²C sensor (BME280) to capture environmental data and transmits it over a CAN bus. Includes CAN loopback tests for robust debugging.',
          tags: ['STM32', 'CAN Bus', 'I2C', 'BME280', 'Embedded C']
        }
      ]
    }
  };

  constructor(public languageService: LanguageService, private sceneControlService: SceneControlService) {}

  ngOnInit(): void {
    this.langSub = this.languageService.language$.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  ngOnDestroy(): void {
    if (this.langSub) {
      this.langSub.unsubscribe();
    }
  }

  toggleLanguage(): void {
    this.languageService.toggleLanguage();
  }

  goBack(): void {
    this.sceneControlService.requestCameraReset();
  }
}
