<?php

namespace App\Site\Controller;

use App\Entity\Card;
use App\Site\Service\CardService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;

class ApiController extends AbstractController
{
    public function __construct(private readonly CardService $service)
    {
    }

    #[Route('api/card', methods: ['GET'], schemes: ['%scheme%'])]
    public function index(): JsonResponse
    {
        try {
            $cards = $this->service->getAll();

            return new JsonResponse([
                'success' => true,
                'results' => array_map(function ($card) { return $this->serializeCard($card); }, $cards),
            ]);
        } catch (\Throwable $e) {
            return new JsonResponse([
                'success' => false,
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    #[Route('api/card/{id}', requirements: ['id' => '\d+'], methods: ['GET'], schemes: ['%scheme%'])]
    public function get(int $id): JsonResponse
    {
        try {
            $card = $this->service->get($id);

            if (null === $card) {
                return new JsonResponse([
                    'success' => false,
                    'error' => 'Not Found',
                ], 404);
            }

            return new JsonResponse([
                'success' => true,
                'results' => $this->serializeCard($card),
            ]);
        } catch (\Throwable $e) {
            return new JsonResponse([
                'success' => false,
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    #[Route('api/card', methods: ['POST'], schemes: ['%scheme%'])]
    public function create(Request $request): JsonResponse
    {
        try {
            /** @var string[] $card */
            $card = json_decode($request->getContent(), true);

            $message = $this->checkRequestFormat($card);
            if (null !== $message) {
                return new JsonResponse([
                    'success' => false,
                    'error' => \sprintf('Bad format: %s', $message),
                ], 400);
            }

            $insertId = $this->service->create($card);

            return new JsonResponse([
                'success' => true,
                'insert-id' => $insertId,
            ]);
        } catch (\Throwable $e) {
            return new JsonResponse([
                'success' => false,
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * @param string[] $card
     */
    private function checkRequestFormat(array $card): ?string
    {
        if (!array_key_exists('email', $card)) {
            return 'Missing property "email"';
        }

        if (!is_string($card['email'])) {
            return 'Property "email" must be of type string';
        }

        if (!array_key_exists('phone', $card)) {
            return 'Missing property "phone"';
        }

        if (!is_string($card['phone'])) {
            return 'Property "phone" must be of type string';
        }

        if (!array_key_exists('colorScheme', $card)) {
            return 'Missing property "colorScheme"';
        }

        if (!is_string($card['colorScheme'])) {
            return 'Property "colorScheme" must be of type string';
        }

        if (!array_key_exists('githubUrl', $card)) {
            return 'Missing property "githubUrl"';
        }

        if (!is_string($card['githubUrl'])) {
            return 'Property "githubUrl" must be of type string';
        }

        if (!array_key_exists('job', $card)) {
            return 'Missing property "job"';
        }

        if (!is_string($card['job'])) {
            return 'Property "job" must be of type string';
        }

        if (!array_key_exists('linkedinUrl', $card)) {
            return 'Missing property "linkedinUrl"';
        }

        if (!is_string($card['linkedinUrl'])) {
            return 'Property "linkedinUrl" must be of type string';
        }

        if (!array_key_exists('name', $card)) {
            return 'Missing property "name"';
        }

        if (!is_string($card['name'])) {
            return 'Property "name" must be of type string';
        }

        if (!array_key_exists('photo', $card)) {
            return 'Missing property "photo"';
        }

        if (!is_string($card['photo'])) {
            return 'Property "photo" must be of type string';
        }

        return null;
    }

    /**
     * @return array{id: int, name:string, job: string, colorScheme: string, email: string, phone: string, photo: string, linkedinUrl: string, githubUrl: string}
     */
    private function serializeCard(Card $card): array
    {
        return [
            'id' => (int) $card->getId(),
            'name' => (string) $card->getName(),
            'job' => (string) $card->getJob(),
            'colorScheme' => (string) $card->getColorScheme(),
            'email' => (string) $card->getEmail(),
            'phone' => (string) $card->getPhone(),
            'photo' => (string) $card->getPhoto(),
            'linkedinUrl' => (string) $card->getLinkedinUrl(),
            'githubUrl' => (string) $card->getGithubUrl(),
        ];
    }
}
