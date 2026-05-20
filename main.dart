import 'package:flutter/material.dart';

void main() => runApp(const MaterialApp(home: NubeSketchCanvas()));

class NubeSketchCanvas extends StatefulWidget {
  const NubeSketchCanvas({super.key});
  @override
  _NubeSketchCanvasState createState() => _NubeSketchCanvasState();
}

class _NubeSketchCanvasState extends State<NubeSketchCanvas> {
  List<List<Offset>> lines = [];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: GestureDetector(
        onPanUpdate: (d) => setState(() => lines.last.add(d.localPosition)),
        onPanStart: (d) => setState(() => lines.add([d.localPosition])),
        child: CustomPaint(
          painter: Painter(lines),
          size: Size.infinite,
        ),
      ),
      floatingActionButton: FloatingActionButton(
        child: const Icon(Icons.clear),
        onPressed: () => setState(() => lines.clear()),
      ),
    );
  }
}

class Painter extends CustomPainter {
  final List<List<Offset>> lines;
  Painter(this.lines);

  @override
  void paint(Canvas canvas, Size size) {
    Paint p = Paint()..color = Colors.black..strokeWidth = 4.0..strokeCap = StrokeCap.round;
    for (var line in lines) {
      for (int i = 0; i < line.length - 1; i++) {
        canvas.drawLine(line[i], line[i + 1], p);
      }
    }
  }
  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => true;
}
