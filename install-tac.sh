#!/bin/bash
# TAC Installer - Automatically installs BMAD if needed
# Instalador TAC - Instala BMAD automaticamente se necessário

set -e

echo "╔════════════════════════════════════════════════════════════╗"
echo "║                                                            ║"
echo "║           TAC - Thesis Advisory Companion                 ║"
echo "║              Sistema de Apoio à Tese de MBA               ║"
echo "║                                                            ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Function to print colored messages
print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

print_info() {
    echo "ℹ $1"
}

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "STEP 1: Checking BMAD Framework"
echo "PASSO 1: Verificando BMAD Framework"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Check if BMAD is installed
if command -v bmad &> /dev/null; then
    BMAD_VERSION=$(bmad --version 2>/dev/null || echo "unknown")
    print_success "BMAD is already installed (version: $BMAD_VERSION)"
    print_success "BMAD já está instalado (versão: $BMAD_VERSION)"
    echo ""
else
    print_warning "BMAD not found. Installing BMAD framework first..."
    print_warning "BMAD não encontrado. Instalando framework BMAD primeiro..."
    echo ""

    # Check if we're in a git repo already
    if [ -d "../.git" ]; then
        print_info "Detected git repository structure"
        print_info "Estrutura de repositório git detectada"

        # Check if we're in tac subdirectory
        if [ -f "../install-bmad.sh" ] || [ -f "../install-bmad" ]; then
            print_info "Found BMAD installer in parent directory"
            print_info "Instalador BMAD encontrado no diretório pai"
            cd ..

            if [ -f "install-bmad.sh" ]; then
                ./install-bmad.sh
            else
                ./install-bmad
            fi

            cd tac
        else
            print_error "BMAD installer not found in parent directory"
            print_error "Instalador BMAD não encontrado no diretório pai"
            echo ""
            print_info "Please install BMAD first:"
            print_info "Por favor, instale BMAD primeiro:"
            echo ""
            echo "  git clone https://github.com/kcbuenaga/bmad.git"
            echo "  cd bmad"
            echo "  ./install-bmad.sh"
            echo ""
            exit 1
        fi
    else
        # Not in git repo, need to clone BMAD
        print_info "BMAD needs to be installed first"
        print_info "BMAD precisa ser instalado primeiro"
        echo ""
        print_info "Cloning BMAD repository..."
        print_info "Clonando repositório BMAD..."

        # Determine installation directory
        if [ -n "$BMAD_INSTALL_DIR" ]; then
            INSTALL_DIR="$BMAD_INSTALL_DIR"
        else
            INSTALL_DIR="$HOME/bmad"
        fi

        # Check if directory already exists
        if [ -d "$INSTALL_DIR" ]; then
            print_warning "Directory $INSTALL_DIR already exists"
            print_warning "Diretório $INSTALL_DIR já existe"

            # Check if it's a BMAD installation
            if [ -f "$INSTALL_DIR/install-bmad.sh" ] || [ -f "$INSTALL_DIR/install-bmad" ]; then
                print_info "Found existing BMAD installation, updating..."
                print_info "Instalação BMAD existente encontrada, atualizando..."
                cd "$INSTALL_DIR"
                git pull origin main || print_warning "Could not update BMAD repository"
            else
                print_error "$INSTALL_DIR exists but is not a BMAD installation"
                print_error "$INSTALL_DIR existe mas não é uma instalação BMAD"
                echo ""
                print_info "Please remove or rename the directory and try again:"
                print_info "Por favor, remova ou renomeie o diretório e tente novamente:"
                echo ""
                echo "  mv $INSTALL_DIR ${INSTALL_DIR}.backup"
                echo ""
                exit 1
            fi
        else
            # Clone BMAD
            git clone https://github.com/kcbuenaga/bmad.git "$INSTALL_DIR"
            cd "$INSTALL_DIR"
        fi

        # Run BMAD installer
        print_info "Running BMAD installer..."
        print_info "Executando instalador BMAD..."
        echo ""

        if [ -f "install-bmad.sh" ]; then
            ./install-bmad.sh
        else
            ./install-bmad
        fi

        # Return to TAC directory
        cd "$INSTALL_DIR/tac"
    fi

    # Verify BMAD installation
    if command -v bmad &> /dev/null; then
        print_success "BMAD successfully installed!"
        print_success "BMAD instalado com sucesso!"
        echo ""
    else
        print_error "BMAD installation failed"
        print_error "Instalação do BMAD falhou"
        echo ""
        print_info "Please install BMAD manually:"
        print_info "Por favor, instale BMAD manualmente:"
        echo ""
        echo "  git clone https://github.com/kcbuenaga/bmad.git"
        echo "  cd bmad"
        echo "  ./install-bmad.sh"
        echo ""
        exit 1
    fi
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "STEP 2: Installing TAC Module"
echo "PASSO 2: Instalando Módulo TAC"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Get the TAC directory (current directory)
TAC_DIR="$(pwd)"

print_info "TAC directory: $TAC_DIR"
print_info "Diretório TAC: $TAC_DIR"
echo ""

# Install TAC using BMAD
print_info "Registering TAC module with BMAD..."
print_info "Registrando módulo TAC com BMAD..."
echo ""

bmad install tac --path "$TAC_DIR"

if [ $? -eq 0 ]; then
    print_success "TAC module registered successfully!"
    print_success "Módulo TAC registrado com sucesso!"
    echo ""
else
    print_error "Failed to register TAC module"
    print_error "Falha ao registrar módulo TAC"
    echo ""

    print_info "Trying alternative installation method..."
    print_info "Tentando método de instalação alternativo..."

    # Alternative: Create symlink in BMAD modules directory
    BMAD_MODULES_DIR="$(bmad --modules-dir 2>/dev/null || echo "$HOME/.bmad/modules")"

    if [ ! -d "$BMAD_MODULES_DIR" ]; then
        mkdir -p "$BMAD_MODULES_DIR"
    fi

    ln -sf "$TAC_DIR" "$BMAD_MODULES_DIR/tac"

    if [ $? -eq 0 ]; then
        print_success "TAC linked successfully!"
        print_success "TAC vinculado com sucesso!"
        echo ""
    else
        print_error "Installation failed"
        print_error "Instalação falhou"
        exit 1
    fi
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "STEP 3: Verifying Installation"
echo "PASSO 3: Verificando Instalação"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Verify TAC installation
print_info "Checking TAC agents..."
print_info "Verificando agentes TAC..."
echo ""

AGENTS_FOUND=0

for agent in dr-carla patricia joao lara; do
    if [ -d "$TAC_DIR/agents/$agent" ]; then
        print_success "Agent found: $agent"
        AGENTS_FOUND=$((AGENTS_FOUND + 1))
    else
        print_warning "Agent not found: $agent"
    fi
done

echo ""
print_info "Checking TAC workflows..."
print_info "Verificando workflows TAC..."
echo ""

WORKFLOWS_FOUND=0

for workflow in progress-dashboard quick-idea-capture research-question thesis-timeline-planner export library-search writing-session; do
    if [ -d "$TAC_DIR/workflows/$workflow" ]; then
        print_success "Workflow found: $workflow"
        WORKFLOWS_FOUND=$((WORKFLOWS_FOUND + 1))
    fi
done

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ $AGENTS_FOUND -ge 4 ] && [ $WORKFLOWS_FOUND -ge 5 ]; then
    print_success "Installation successful!"
    print_success "Instalação bem-sucedida!"
    echo ""
    echo "╔════════════════════════════════════════════════════════════╗"
    echo "║                                                            ║"
    echo "║  ✓ TAC is ready to use!                                   ║"
    echo "║  ✓ TAC está pronto para usar!                             ║"
    echo "║                                                            ║"
    echo "╚════════════════════════════════════════════════════════════╝"
    echo ""
    echo "Next steps / Próximos passos:"
    echo ""
    echo "1. Set up your thesis folder:"
    echo "   Configure sua pasta de tese:"
    echo ""
    echo "   mkdir -p ~/thesis-artifacts"
    echo "   cd ~/thesis-artifacts"
    echo ""
    echo "2. Start with the progress dashboard:"
    echo "   Comece com o painel de progresso:"
    echo ""
    echo "   /tac:progress-dashboard"
    echo ""
    echo "3. Or begin topic evolution:"
    echo "   Ou comece a evolução do tópico:"
    echo ""
    echo "   /tac:dr-carla:topic-evolution"
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo "📚 Documentation / Documentação:"
    echo "   See README.md for complete guide"
    echo "   Veja README.md para guia completo"
    echo ""
    echo "🧪 Test environment / Ambiente de teste:"
    echo "   See test/ directory for demo walkthrough"
    echo "   Veja diretório test/ para demonstração"
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
else
    print_error "Installation incomplete"
    print_error "Instalação incompleta"
    echo ""
    print_info "Found: $AGENTS_FOUND/4 agents, $WORKFLOWS_FOUND workflows"
    print_info "Encontrado: $AGENTS_FOUND/4 agentes, $WORKFLOWS_FOUND workflows"
    echo ""
    print_info "Please check the TAC directory structure and try again"
    print_info "Por favor, verifique a estrutura do diretório TAC e tente novamente"
    exit 1
fi
