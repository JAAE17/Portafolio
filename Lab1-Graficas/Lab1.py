from PIL import Image


WIDTH, HEIGHT = 1000, 800


canvas = [[(0, 0, 0) for _ in range(WIDTH)] for _ in range(HEIGHT)]

def draw_pixel(x, y, color=(0, 0, 0)):
    if 0 <= x < WIDTH and 0 <= y < HEIGHT:
        canvas[y][x] = color

def draw_line(x0, y0, x1, y1, color=(0, 0, 0)):
    dx = abs(x1 - x0)
    dy = abs(y1 - y0)
    sx = 1 if x0 < x1 else -1
    sy = 1 if y0 < y1 else -1
    err = dx - dy

    while True:
        draw_pixel(x0, y0, color)
        if x0 == x1 and y0 == y1:
            break
        e2 = err * 2
        if e2 > -dy:
            err -= dy
            x0 += sx
        if e2 < dx:
            err += dx
            y0 += sy

def point_in_polygon(point, polygon):
    x, y = point
    inside = False
    n = len(polygon)
    for i in range(n):
        xi, yi = polygon[i]
        xj, yj = polygon[(i + 1) % n]
        if ((yi > y) != (yj > y)) and (x < (xj - xi) * (y - yi) / ((yj - yi) + 1e-6) + xi):
            inside = not inside
    return inside

def fill_polygon(points, color=(0, 0, 0), hole=None):
    edges = []
    n = len(points)

    for i in range(n):
        x0, y0 = points[i]
        x1, y1 = points[(i + 1) % n]
        if y0 == y1:
            continue
        if y0 > y1:
            x0, y0, x1, y1 = x1, y1, x0, y0
        edges.append((y0, y1, x0, (x1 - x0) / (y1 - y0)))

    edges.sort()
    y_min = min(p[1] for p in points)
    y_max = max(p[1] for p in points)

    for y in range(y_min, y_max + 1):
        x_intersections = []
        for y0, y1, x0, inv_slope in edges:
            if y0 <= y < y1:
                x_intersections.append(x0 + (y - y0) * inv_slope)
        x_intersections.sort()
        for i in range(0, len(x_intersections), 2):
            x_start = int(round(x_intersections[i]))
            x_end = int(round(x_intersections[i+1]))
            for x in range(x_start, x_end + 1):
                if hole and point_in_polygon((x, y), hole):
                    continue
                draw_pixel(x, y, color)

def draw_polygon_outline(points, color=(0, 0, 255)):
    for i in range(len(points)):
        x0, y0 = points[i]
        x1, y1 = points[(i + 1) % len(points)]
        draw_line(x0, y0, x1, y1, color)


poly1 = [(165, 380), (185, 360), (180, 330), (207, 345), (233, 330), (230, 360), (250, 380), (220, 385), (205, 410), (193, 383)]

poly2 = [(321, 335), (288, 286), (339, 251), (374, 302)]

poly3 = [(377, 249), (411, 197), (436, 249)]

poly4 = [(413, 177), (448, 159), (502, 88), (553, 53), (535, 36), (676, 37), (660, 52),
(750, 145), (761, 179), (672, 192), (659, 214), (615, 214), (632, 230), (580, 230),
(597, 215), (552, 214), (517, 144), (466, 180)]

poly5 = [(682, 175), (708, 120), (735, 148), (739, 170)]  


fill_polygon(poly1, (255, 0, 120))       
fill_polygon(poly2, (200, 255, 0))       
fill_polygon(poly3, (0, 100, 255))       
fill_polygon(poly4, (255, 165, 150), hole=poly5) 


draw_polygon_outline(poly1)
draw_polygon_outline(poly2)
draw_polygon_outline(poly3)
draw_polygon_outline(poly4)
draw_polygon_outline(poly5)


img = Image.new("RGB", (WIDTH, HEIGHT))
pixels = img.load()
for y in range(HEIGHT):
    for x in range(WIDTH):
        pixels[x, y] = canvas[y][x]


img = img.transpose(Image.Transpose.ROTATE_180)
img = img.transpose(Image.Transpose.FLIP_LEFT_RIGHT)

img.save("poligono.png")
img.show()

print(" poligono.png ")

