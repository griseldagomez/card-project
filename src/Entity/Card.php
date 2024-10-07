<?php

namespace App\Entity;

use App\Repository\CardRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use ShadowC\AdminBundle\Attribute\ListField;

#[ORM\Entity(repositoryClass: CardRepository::class)]
class Card
{
    #[ORM\Id]
    #[ORM\GeneratedValue(strategy: 'SEQUENCE')]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[ListField(sortable: true, searchable: true)]
    private ?string $title = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $text = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $project_image = null;

    #[ORM\Column(length: 255)]
    private ?string $github_url = null;

    #[ORM\Column(length: 255)]
    private ?string $email = null;

    #[ORM\Column(length: 40)]
    private ?string $phone = null;

    #[ORM\Column(length: 6)]
    private ?string $color_scheme = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): static
    {
        $this->title = $title;

        return $this;
    }

    public function getText(): ?string
    {
        return $this->text;
    }

    public function setText(string $text): static
    {
        $this->text = $text;

        return $this;
    }

    public function getProjectImage(): ?string
    {
        return $this->project_image;
    }

    public function setProjectImage(string $project_image): static
    {
        $this->project_image = $project_image;

        return $this;
    }

    public function getGithubUrl(): ?string
    {
        return $this->github_url;
    }

    public function setGithubUrl(string $github_url): static
    {
        $this->github_url = $github_url;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }

    public function getPhone(): ?string
    {
        return $this->phone;
    }

    public function setPhone(string $phone): static
    {
        $this->phone = $phone;

        return $this;
    }

    public function getColorScheme(): ?string
    {
        return $this->color_scheme;
    }

    public function setColorScheme(string $color_scheme): static
    {
        $this->color_scheme = $color_scheme;

        return $this;
    }
}
