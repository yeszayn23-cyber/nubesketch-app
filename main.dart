import 'package:flutter/material.dart';

void main() {
  runApp(const NubeSketchApp());
}

class NubeSketchApp extends StatelessWidget {
  const NubeSketchApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'NubeSketch',
      theme: ThemeData(primarySwatch: Colors.blue),
      home: const Scaffold(
        body: Center(
          child: Text(
            "مرحباً بكِ في NubeSketch!",
            style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
          ),
        ),
      ),
    );
  }
}
