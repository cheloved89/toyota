
let matrix = [
    //v0   v1  v2  v3  v4  v5  v6  v7
    [1000, 4, 1000, 2, 1000, 2, 1000, 1000],
    [1000, 1000, 3, 1000, 2, 1000, 1000, 1000],
    [1000, 1000, 1000, 4, 1000, 1000, 3, 1000],
    [1000, 1000, 1000, 1000, 1000, 1000, 4, 1000],
    [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1],
    [1000, 1000, 1000, 1000, 3, 1000, 4, 1000],
    [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000],
    [1000, 1000, 1000, 1000, 1000, 1000, 4, 1000]
];

function algorithmDextra(matrix) {
    const numVertices = matrix.length; // Количество вершин
    const distances = Array(numVertices).fill(Infinity); // Массив расстояний от начальной вершины до всех остальных
    const visited = Array(numVertices).fill(false); //посещенные вершины
    const previous = Array(numVertices).fill(null); // Массив, хранящий предыдущую вершину для восстановления пути
    console.log(distances);
    console.log(visited);
    console.log(previous);
    distances[0] = 0; // Расстояние от начальной вершины (0) до самой себя равно 0

    for (let count = 0; count < numVertices - 1; count++) {
        let minDistance = Infinity; // Минимальное расстояние
        let minIndex = -1; // Индекс вершины с минимальным расстоянием

        // Находим вершину с минимальным расстоянием
        for (let v = 0; v < numVertices; v++) {
            if (!visited[v] && distances[v] <= minDistance) {
                minDistance = distances[v];
                minIndex = v;
            }
        }

        if (minIndex === -1) {
            break; // Нет больше достижимых вершин
        }

        visited[minIndex] = true; // Отмечаем вершину как посещенную

        // Обновляем расстояния до соседних вершин
        for (let v = 0; v < numVertices; v++) {
            if (!visited[v] && matrix[minIndex][v] !== 1000 && distances[minIndex] + matrix[minIndex][v] < distances[v]) {
                distances[v] = distances[minIndex] + matrix[minIndex][v]; // Обновляем расстояние
                previous[v] = minIndex; // Сохраняем предыдущую вершину
            }
        }
    }
    
   
    for(let i = 0; i < numVertices; i++){
        console.log(`Кратчайшее расстояние от вершины 0 до вершины ${i}: ${distances[i]}`);
        console.log(`Путь: ${getPath(previous, i)}`);
    }
}

function getPath(previous, currentVertex) {
    const path = []; // Массив для хранения пути
    let current = currentVertex; // Текущая вершина

    while (current !== null) {
        path.unshift(current); // Добавляем вершину в начало массива
        current = previous[current]; // Переходим к предыдущей вершине
    }

    return path.join(" -> "); // Возвращаем путь в виде строки
}

algorithmDextra(matrix);