import * as Linking from 'expo-linking';

export const linking = {
    prefixes: [
        'https://pentapizza.com.br',
        'pentapizza://',
        // 'http://localhost:19006',
        'http://localhost:8081',
        'https://wellborn-humoresquely-norman.ngrok-free.dev/edit-password'
    ],
    config: {
        screens: {
            EditPassword: 'edit-password',
            // Outras telas podem ser adicionadas aqui se necessário
        },
    },
};
